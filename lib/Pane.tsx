import React, { PureComponent } from "react";

import { prefix } from "inline-style-prefixer";

import { getUnit, convertSizeToCssValue } from "./SplitPane";

export interface PaneProps {
  children: React.ReactNode | React.ReactNode[];
  setRef?: (index: number, element: HTMLDivElement) => void;
  index?: number;
  className?: string;
  initialSize?: string | number;
  minSize?: string;
  maxSize?: string;
  split?: "vertical" | "horizontal";
  resizersSize?: number;
  size?: string;
}

function PaneStyle({
  split = "vertical",
  initialSize = "1",
  size,
  minSize = "0",
  maxSize = "100%",
  resizersSize = 1,
}: PaneProps) {
  const value = size || initialSize;
  const vertical = split === "vertical";
  const styleProp = {
    minSize: vertical ? "minWidth" : "minHeight",
    maxSize: vertical ? "maxWidth" : "maxHeight",
    size: vertical ? "width" : "height",
  } as const;

  let style: React.CSSProperties = {
    display: "flex",
    outline: "none",
  };

  style[styleProp.minSize] = convertSizeToCssValue(minSize, resizersSize);
  style[styleProp.maxSize] = convertSizeToCssValue(maxSize, resizersSize);

  switch (getUnit(value.toString())) {
    case "ratio":
      style.flex = value;
      break;
    case "%":
    case "px":
      style.flexGrow = 0;
      style[styleProp.size] = convertSizeToCssValue(
        value.toString(),
        resizersSize
      );
      break;
  }

  return style;
}

class Pane extends PureComponent<PaneProps> {
  setRef = (element: HTMLDivElement) => {
    this.props.setRef?.(this.props.index ?? 0, element);
  };

  render() {
    const { children, className } = this.props;
    const prefixedStyle = prefix(PaneStyle(this.props));

    return (
      <div className={className} style={prefixedStyle} ref={this.setRef}>
        {children}
      </div>
    );
  }
}

export default Pane;
