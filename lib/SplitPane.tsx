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
    console.log(window.innerHeight, clientY);
    if (
      !dimensionsSnapshot.current ||
      (split === "vertical" && (clientX >= window.innerWidth || clientX < 0)) ||
      (split === "horizontal" && (clientY >= window.innerHeight || clientY < 0))
    ) {
      return;
    }

    const { sizesPx, minSizesPx, maxSizesPx, splitPaneSizePx, paneDimensions } =
      dimensionsSnapshot.current;

    const sizeDim = split === "vertical" ? "width" : "height";
    const currResizerIndex = resizerIndex.current;

    const primary = paneDimensions[currResizerIndex];
    const secondary = paneDimensions[currResizerIndex + 1];

    const maxSize = primary[sizeDim] + secondary[sizeDim];

    const primaryMinSizePx = minSizesPx[currResizerIndex];
    const secondaryMinSizePx = minSizesPx[currResizerIndex + 1];
    const primaryMaxSizePx = Math.min(maxSizesPx[currResizerIndex], maxSize);
    const secondaryMaxSizePx = Math.min(
      maxSizesPx[currResizerIndex + 1],
      maxSize
    );

    const moveOffset =
      split === "vertical"
        ? startClientX.current - clientX
        : startClientY.current - clientY;

    let primarySizePx = primary[sizeDim] - moveOffset;
    let secondarySizePx = secondary[sizeDim] + moveOffset;

    let primaryHasReachedLimit = false;
    let secondaryHasReachedLimit = false;

    if (primarySizePx < primaryMinSizePx) {
      primarySizePx = primaryMinSizePx;
      primaryHasReachedLimit = true;
      return;
    } else if (primarySizePx > primaryMaxSizePx) {
      primarySizePx = primaryMaxSizePx;
      primaryHasReachedLimit = true;
      return;
    }

    if (secondarySizePx < secondaryMinSizePx) {
      secondarySizePx = secondaryMinSizePx;
      secondaryHasReachedLimit = true;
      return;
    } else if (secondarySizePx > secondaryMaxSizePx) {
      secondarySizePx = secondaryMaxSizePx;
      secondaryHasReachedLimit = true;
      return;
    }

    if (primaryHasReachedLimit) {
      secondarySizePx = primary[sizeDim] + secondary[sizeDim] - primarySizePx;
    } else if (secondaryHasReachedLimit) {
      primarySizePx = primary[sizeDim] + secondary[sizeDim] - secondarySizePx;
    }

    sizesPx[currResizerIndex] = primarySizePx;
    sizesPx[currResizerIndex + 1] = secondarySizePx;

    let newSizes = sizes.concat();
    let updateRatio;

    [primarySizePx, secondarySizePx].forEach((paneSize, idx) => {
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

    onChange?.(newSizes);
    setSizes(newSizes);
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
  ) {
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
