import clsx from "clsx";
import { prefix } from "inline-style-prefixer";
import React from "react";
import { convertSizeToCssValue, getUnit } from "./utils";

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
  const value = size ?? initialSize;
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
        resizersSize,
      );
      break;
  }

  return style;
}

const Pane = ({ children, className, setRef, index, ...rest }: PaneProps) => {
  const prefixedStyle = prefix(PaneStyle({ children, ...rest }));

  const setPaneRef = (element: HTMLDivElement) => {
    if (!setRef || index === undefined) return;

    setRef(index, element);
  };

  return (
    <div
      className={clsx(className, "react-split-pane__Pane")}
      style={prefixedStyle}
      ref={setPaneRef}
    >
      {children}
    </div>
  );
};

export default Pane;
