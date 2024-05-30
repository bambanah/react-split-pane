import React, { cloneElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Pane from "./Pane";
import Resizer from "./Resizer";
import { convert, convertToUnit, getUnit, removeNullChildren } from "./utils";

const DEFAULT_PANE_SIZE = "1";
const DEFAULT_PANE_MIN_SIZE = "0";
const DEFAULT_PANE_MAX_SIZE = "100%";

const ColumnStyle = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  outline: none;
  overflow: hidden;
  user-select: text;
`;

const RowStyle = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex: 1;
  outline: none;
  overflow: hidden;
  user-select: text;
`;

interface DimensionsSnapshot {
  resizersSize: number;
  paneDimensions: DOMRect[];
  splitPaneSizePx: number;
  minSizesPx: number[];
  maxSizesPx: number[];
  sizesPx: number[];
}

export interface SplitPaneProps {
  children: any[];
  className?: string;
  split?: "vertical" | "horizontal";
  resizerSize?: number;
  onChange?: (sizes: string[]) => void;
  onResizeStart?: () => void;
  onResizeEnd?: (sizes: string[]) => void;
  allowResize?: boolean;
}

const SplitPane = ({
  children,
  className,
  split = "vertical",
  allowResize = true,
  onResizeStart,
  onResizeEnd,
  onChange,
  resizerSize = 1,
}: SplitPaneProps) => {
  const splitPaneRef = React.useRef<HTMLDivElement>(null);

  const [paneElements, setPaneElements] = useState<HTMLElement[]>([]);
  const resizerIndex = useRef(-1);

  const dimensionsSnapshot = useRef<DimensionsSnapshot>();
  const startClientX = useRef(0);
  const startClientY = useRef(0);

  const [sizes, setSizes] = useState(getPanePropSize(children));

  useEffect(() => {
    updateDimensionsSnapshot();
  }, [splitPaneRef]);

  const onMouseDown = (event: React.MouseEvent, resizerIndex: number) => {
    if (event.button !== 0) return;

    event.preventDefault();

    onDown(resizerIndex, event.clientX, event.clientY);
  };

  const onTouchStart = (event: React.TouchEvent, resizerIndex: number) => {
    event.preventDefault();

    const { clientX, clientY } = event.touches[0];

    onDown(resizerIndex, clientX, clientY);
  };

  const onMouseMove = (event: MouseEvent) => {
    event.preventDefault();

    onMove(event.clientX, event.clientY);
  };

  const onTouchMove = (event: TouchEvent) => {
    event.preventDefault();

    const { clientX, clientY } = event.touches[0];

    onMove(clientX, clientY);
  };

  const onMouseUp = (event: MouseEvent | TouchEvent) => {
    event.preventDefault();

    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);

    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onMouseUp);
    document.removeEventListener("touchcancel", onMouseUp);

    if (onResizeEnd) {
      onResizeEnd(sizes);
    }
  };

  const onDown = (
    newResizerIndex: number,
    clientX: number,
    clientY: number
  ) => {
    if (!allowResize) {
      return;
    }

    resizerIndex.current = newResizerIndex;
    updateDimensionsSnapshot();
    startClientX.current = clientX;
    startClientY.current = clientY;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("touchcancel", onMouseUp);

    if (onResizeStart) {
      onResizeStart();
    }
  };

  function onMove(clientX: number, clientY: number) {
    if (!dimensionsSnapshot.current) return;

    const { sizesPx, minSizesPx, maxSizesPx, splitPaneSizePx, paneDimensions } =
      dimensionsSnapshot.current;

    const sizeDim = split === "vertical" ? "width" : "height";
    const currResizerIndex = resizerIndex.current;

    const primaryDimensions = paneDimensions[currResizerIndex];
    const secondaryDimensions = paneDimensions[currResizerIndex + 1];

    const maxSize = primaryDimensions[sizeDim] + secondaryDimensions[sizeDim];

    const primaryMinSizePx = minSizesPx[currResizerIndex];
    const secondaryMinSizePx = minSizesPx[currResizerIndex + 1];
    const primaryMaxSizePx = Math.min(maxSizesPx[currResizerIndex], maxSize);
    const secondaryMaxSizePx = Math.min(
      maxSizesPx[currResizerIndex + 1],
      maxSize
    );

    const moveOffsetPx =
      split === "vertical"
        ? startClientX.current - clientX
        : startClientY.current - clientY;

    let newPrimarySizePx = primaryDimensions[sizeDim] - moveOffsetPx;
    let newSecondarySizePx = secondaryDimensions[sizeDim] + moveOffsetPx;

    if (
      newPrimarySizePx < primaryMinSizePx ||
      newPrimarySizePx > primaryMaxSizePx ||
      newSecondarySizePx < secondaryMinSizePx ||
      newSecondarySizePx > secondaryMaxSizePx
    ) {
      // If any of the new sizes are out of bounds, abort updating
      return;
    }

    sizesPx[currResizerIndex] = newPrimarySizePx;
    sizesPx[currResizerIndex + 1] = newSecondarySizePx;

    let newSizes = sizes.concat();
    let updateRatio;

    [newPrimarySizePx, newSecondarySizePx].forEach((paneSize, idx) => {
      const unit = getUnit(newSizes[currResizerIndex + idx]);
      if (unit !== "ratio") {
        newSizes[currResizerIndex + idx] = convertToUnit(
          paneSize,
          unit,
          splitPaneSizePx
        );
      } else {
        updateRatio = true;
      }
    });

    if (updateRatio) {
      let ratioCount = 0;
      let lastRatioIdx = 0;
      newSizes = newSizes.map((size, idx) => {
        if (getUnit(size) === "ratio") {
          ratioCount++;
          lastRatioIdx = idx;

          return convertToUnit(sizesPx[idx], "ratio");
        }

        return size;
      });

      if (ratioCount === 1) {
        newSizes[lastRatioIdx] = "1";
      }
    }

    setSizes(newSizes);
    onChange?.(newSizes);
  }

  function updateDimensionsSnapshot() {
    const paneDimensions = getPaneDimensions();
    const splitPaneDimensions = splitPaneRef.current?.getBoundingClientRect();

    if (!splitPaneDimensions) {
      return;
    }

    const minSizes = getPanePropMinMaxSize(children, "minSize");
    const maxSizes = getPanePropMinMaxSize(children, "maxSize");

    const resizersSize = getResizersSize();
    const splitPaneSizePx =
      split === "vertical"
        ? splitPaneDimensions.width - resizersSize
        : splitPaneDimensions.height - resizersSize;

    const minSizesPx = minSizes.map((s) => convert(s, splitPaneSizePx));
    const maxSizesPx = maxSizes.map((s) => convert(s, splitPaneSizePx));
    const sizesPx = paneDimensions.map((d) =>
      split === "vertical" ? d.width : d.height
    );

    dimensionsSnapshot.current = {
      resizersSize,
      paneDimensions,
      splitPaneSizePx,
      minSizesPx,
      maxSizesPx,
      sizesPx,
    };
  }

  function getPanePropSize(children: SplitPaneProps["children"]) {
    return removeNullChildren(children).map((child) => {
      const value = child.props["size"] || child.props["initialSize"];

      if (value === undefined) {
        return DEFAULT_PANE_SIZE;
      }

      return String(value);
    });
  }

  function getPanePropMinMaxSize(
    children: SplitPaneProps["children"],
    key: "minSize" | "maxSize"
  ): string[] {
    return removeNullChildren(children).map((child) => {
      const value = child.props[key];
      if (value === undefined) {
        return key === "maxSize"
          ? DEFAULT_PANE_MAX_SIZE
          : DEFAULT_PANE_MIN_SIZE;
      }

      return value;
    });
  }

  function getPaneDimensions() {
    return paneElements
      .filter((el) => el)
      .map((el) => el.getBoundingClientRect());
  }

  const setPaneRef = (idx: number, el: HTMLDivElement) => {
    if (!paneElements) {
      setPaneElements([]);
    }

    paneElements[idx] = el;
  };

  function getResizersSize() {
    return (removeNullChildren(children).length - 1) * (resizerSize ?? 1);
  }

  const notNullChildren = removeNullChildren(children);
  const resizersSize = getResizersSize();

  const elements = notNullChildren.reduce((acc, child, idx) => {
    let pane;
    const resizerIndex = idx - 1;
    const isPane = child.type === Pane;
    const paneProps = {
      index: idx,
      "data-type": "Pane",
      split: split,
      key: `Pane-${idx}`,
      setRef: setPaneRef,
      resizersSize,
      size: sizes[idx],
    };

    if (isPane) {
      pane = cloneElement(child, paneProps);
    } else {
      pane = <Pane {...paneProps}>{child}</Pane>;
    }

    if (acc.length === 0) {
      return [...acc, pane];
    } else {
      const resizer = (
        <Resizer
          index={resizerIndex}
          key={`Resizer-${resizerIndex}`}
          split={split}
          onMouseDownCapture={(e) => onMouseDown(e, resizerIndex)}
          onTouchStart={(e) => onTouchStart(e, resizerIndex)}
        />
      );

      return [...acc, resizer, pane];
    }
  }, []);

  const StyleComponent = split === "vertical" ? RowStyle : ColumnStyle;

  return (
    <StyleComponent
      className={className}
      data-type="SplitPane"
      data-split={split}
      ref={splitPaneRef}
    >
      {elements}
    </StyleComponent>
  );
};

export default SplitPane;
