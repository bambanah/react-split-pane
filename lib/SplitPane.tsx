import React, { Component, cloneElement } from "react";

import styled from "styled-components";
import Resizer from "./Resizer";
import Pane from "./Pane";

const DEFAULT_PANE_SIZE = "1";
const DEFAULT_PANE_MIN_SIZE = "0";
const DEFAULT_PANE_MAX_SIZE = "100%";

const ColumnStyle = styled.div({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  flex: 1,
  outline: "none",
  overflow: "hidden",
  userSelect: "text",
});

const RowStyle = styled.div({
  display: "flex",
  height: "100%",
  flexDirection: "row",
  flex: 1,
  outline: "none",
  overflow: "hidden",
  userSelect: "text",
});

function convert(str: string, size: number) {
  const tokens = str.match(/([0-9]+)([px|%]*)/);
  if (!tokens || tokens.length < 2) {
    return;
  }

  const value = tokens[1];
  const unit = tokens[2];

  return toPx(parseInt(value), size, unit);
}

function toPx(value: number, size: number, unit = "px") {
  switch (unit) {
    case "%": {
      return +((size * value) / 100).toFixed(2);
    }
    default: {
      return +value;
    }
  }
}

function removeNullChildren(children: SplitPaneProps["children"]): any[] {
  return React.Children.toArray(children).filter((c) => c);
}

export function getUnit(size: string) {
  if (size.endsWith("px")) {
    return "px";
  }

  if (size.endsWith("%")) {
    return "%";
  }

  return "ratio";
}

export function convertSizeToCssValue(value: string, resizersSize: number) {
  if (getUnit(value) !== "%") {
    return value;
  }

  if (!resizersSize) {
    return value;
  }

  const idx = value.search("%");
  const percent = parseInt(value.slice(0, idx)) / 100;
  if (percent === 0) {
    return value;
  }

  return `calc(${value} - ${resizersSize}px*${percent})`;
}

function convertToUnit(
  size: number,
  unit: "%" | "px" | "ratio",
  containerSize?: number
) {
  switch (unit) {
    case "%":
      return `${((size / (containerSize ?? 0)) * 100).toFixed(2)}%`;
    case "px":
      return `${size.toFixed(2)}px`;
    case "ratio":
      return (size * 100).toFixed(0);
  }
}

interface SplitPaneProps {
  children: any[];
  className?: string;
  split?: "vertical" | "horizontal";
  resizerSize?: number;
  onChange?: (sizes: string[]) => void;
  onResizeStart?: () => void;
  onResizeEnd?: (sizes: string[]) => void;
  allowResize?: boolean;
}

interface SplitPaneState {
  sizes: string[];
}

class SplitPane extends Component<SplitPaneProps, SplitPaneState> {
  splitPane: React.RefObject<HTMLDivElement>;
  paneElements: HTMLElement[];
  resizerIndex: number;
  dimensionsSnapshot: any;
  startClientX: number;
  startClientY: number;

  constructor(props: SplitPaneProps) {
    super(props);

    this.splitPane = React.createRef();
    this.paneElements = [];
    this.resizerIndex = -1;
    this.dimensionsSnapshot = null;
    this.startClientX = 0;
    this.startClientY = 0;

    this.state = {
      sizes: this.getPanePropSize(props),
    };
  }

  componentWillReceiveProps(nextProps: SplitPaneProps) {
    this.setState({ sizes: this.getPanePropSize(nextProps) });
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMove);

    document.removeEventListener("touchmove", this.onTouchMove);
    document.removeEventListener("touchend", this.onMouseUp);
  }

  onMouseDown = (event: MouseEvent, resizerIndex: number) => {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();

    this.onDown(resizerIndex, event.clientX, event.clientY);
  };

  onTouchStart = (event: TouchEvent, resizerIndex: number) => {
    event.preventDefault();

    const { clientX, clientY } = event.touches[0];

    this.onDown(resizerIndex, clientX, clientY);
  };

  onDown = (resizerIndex: number, clientX: number, clientY: number) => {
    const { allowResize, onResizeStart } = this.props;

    if (!allowResize) {
      return;
    }

    this.resizerIndex = resizerIndex;
    this.dimensionsSnapshot = this.getDimensionsSnapshot(this.props);
    this.startClientX = clientX;
    this.startClientY = clientY;

    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);

    document.addEventListener("touchmove", this.onTouchMove);
    document.addEventListener("touchend", this.onMouseUp);
    document.addEventListener("touchcancel", this.onMouseUp);

    if (onResizeStart) {
      onResizeStart();
    }
  };

  onMouseMove = (event: MouseEvent) => {
    event.preventDefault();

    this.onMove(event.clientX, event.clientY);
  };

  onTouchMove = (event: TouchEvent) => {
    event.preventDefault();

    const { clientX, clientY } = event.touches[0];

    this.onMove(clientX, clientY);
  };

  onMouseUp = (event: MouseEvent | TouchEvent) => {
    event.preventDefault();

    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMove);

    document.removeEventListener("touchmove", this.onTouchMove);
    document.removeEventListener("touchend", this.onMouseUp);
    document.addEventListener("touchcancel", this.onMouseUp);

    if (this.props.onResizeEnd) {
      this.props.onResizeEnd(this.state.sizes);
    }
  };

  getDimensionsSnapshot(props: SplitPaneProps) {
    const split = props.split;
    const paneDimensions = this.getPaneDimensions();
    const splitPaneDimensions = this.splitPane.current?.getBoundingClientRect();

    if (!splitPaneDimensions) {
      return;
    }

    const minSizes = this.getPanePropMinMaxSize(props, "minSize");
    const maxSizes = this.getPanePropMinMaxSize(props, "maxSize");

    const resizersSize = this.getResizersSize(
      removeNullChildren(this.props.children)
    );
    const splitPaneSizePx =
      split === "vertical"
        ? splitPaneDimensions.width - resizersSize
        : splitPaneDimensions.height - resizersSize;

    const minSizesPx = minSizes.map((s) => convert(s, splitPaneSizePx));
    const maxSizesPx = maxSizes.map((s) => convert(s, splitPaneSizePx));
    const sizesPx = paneDimensions.map((d) =>
      split === "vertical" ? d.width : d.height
    );

    return {
      resizersSize,
      paneDimensions,
      splitPaneSizePx,
      minSizesPx,
      maxSizesPx,
      sizesPx,
    };
  }

  getPanePropSize(props: SplitPaneProps) {
    return removeNullChildren(props.children).map((child) => {
      const value = child.props["size"] || child.props["initialSize"];

      if (value === undefined) {
        return DEFAULT_PANE_SIZE;
      }

      return String(value);
    });
  }

  getPanePropMinMaxSize(props: SplitPaneProps, key: "minSize" | "maxSize") {
    return removeNullChildren(props.children).map((child) => {
      const value = child.props[key];
      if (value === undefined) {
        return key === "maxSize"
          ? DEFAULT_PANE_MAX_SIZE
          : DEFAULT_PANE_MIN_SIZE;
      }

      return value;
    });
  }

  getPaneDimensions() {
    return this.paneElements
      .filter((el) => el)
      .map((el) => el.getBoundingClientRect());
  }

  getSizes() {
    return this.state.sizes;
  }

  onMove(clientX: number, clientY: number) {
    const { split, onChange } = this.props;
    const resizerIndex = this.resizerIndex;
    const { sizesPx, minSizesPx, maxSizesPx, splitPaneSizePx, paneDimensions } =
      this.dimensionsSnapshot;

    const sizeDim = split === "vertical" ? "width" : "height";
    const primary = paneDimensions[resizerIndex];
    const secondary = paneDimensions[resizerIndex + 1];
    const maxSize = primary[sizeDim] + secondary[sizeDim];

    const primaryMinSizePx = minSizesPx[resizerIndex];
    const secondaryMinSizePx = minSizesPx[resizerIndex + 1];
    const primaryMaxSizePx = Math.min(maxSizesPx[resizerIndex], maxSize);
    const secondaryMaxSizePx = Math.min(maxSizesPx[resizerIndex + 1], maxSize);

    const moveOffset =
      split === "vertical"
        ? this.startClientX - clientX
        : this.startClientY - clientY;

    let primarySizePx = primary[sizeDim] - moveOffset;
    let secondarySizePx = secondary[sizeDim] + moveOffset;

    let primaryHasReachedLimit = false;
    let secondaryHasReachedLimit = false;

    if (primarySizePx < primaryMinSizePx) {
      primarySizePx = primaryMinSizePx;
      primaryHasReachedLimit = true;
    } else if (primarySizePx > primaryMaxSizePx) {
      primarySizePx = primaryMaxSizePx;
      primaryHasReachedLimit = true;
    }

    if (secondarySizePx < secondaryMinSizePx) {
      secondarySizePx = secondaryMinSizePx;
      secondaryHasReachedLimit = true;
    } else if (secondarySizePx > secondaryMaxSizePx) {
      secondarySizePx = secondaryMaxSizePx;
      secondaryHasReachedLimit = true;
    }

    if (primaryHasReachedLimit) {
      secondarySizePx = primary[sizeDim] + secondary[sizeDim] - primarySizePx;
    } else if (secondaryHasReachedLimit) {
      primarySizePx = primary[sizeDim] + secondary[sizeDim] - secondarySizePx;
    }

    sizesPx[resizerIndex] = primarySizePx;
    sizesPx[resizerIndex + 1] = secondarySizePx;

    let sizes = this.getSizes().concat();
    let updateRatio;

    [primarySizePx, secondarySizePx].forEach((paneSize, idx) => {
      const unit = getUnit(sizes[resizerIndex + idx]);
      if (unit !== "ratio") {
        sizes[resizerIndex + idx] = convertToUnit(
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
      sizes = sizes.map((size, idx) => {
        if (getUnit(size) === "ratio") {
          ratioCount++;
          lastRatioIdx = idx;

          return convertToUnit(sizesPx[idx], "ratio");
        }

        return size;
      });

      if (ratioCount === 1) {
        sizes[lastRatioIdx] = "1";
      }
    }

    onChange?.(sizes);

    this.setState({
      sizes,
    });
  }

  setPaneRef = (idx: number, el: HTMLDivElement) => {
    if (!this.paneElements) {
      this.paneElements = [];
    }

    this.paneElements[idx] = el;
  };

  getResizersSize(children: SplitPaneProps["children"]) {
    return (children.length - 1) * (this.props.resizerSize ?? 1);
  }

  render() {
    const { children, className, split } = this.props;
    const notNullChildren = removeNullChildren(children);
    const sizes = this.getSizes();
    const resizersSize = this.getResizersSize(notNullChildren);

    const elements = notNullChildren.reduce((acc, child, idx) => {
      let pane;
      const resizerIndex = idx - 1;
      const isPane = child.type === Pane;
      const paneProps = {
        index: idx,
        "data-type": "Pane",
        split: split,
        key: `Pane-${idx}`,
        setRef: this.setPaneRef,
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
            onMouseDown={this.onMouseDown}
            onTouchStart={this.onTouchStart}
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
        ref={this.splitPane}
      >
        {elements}
      </StyleComponent>
    );
  }
}

export default SplitPane;
