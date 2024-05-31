import React from "react";
import { SplitPaneProps } from "./SplitPane";

type Unit = "%" | "px" | "ratio" | "em" | "rem";

export function getUnit(size: string): Unit {
  if (size.endsWith("px")) {
    return "px";
  }

  if (size.endsWith("rem")) {
    return "rem";
  }

  if (size.endsWith("em")) {
    return "em";
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

export function convert(str: string, size: number) {
  const tokens = RegExp(/(\d+)(px|em|rem|%)?/).exec(str);
  if (!tokens) return 0;

  const value = tokens[1];
  const unit = tokens[2] as Unit;

  return toPx(parseInt(value), size, unit);
}

export function toPx(value: number, size: number, unit: Unit = "px") {
  switch (unit) {
    case "%":
      return +((size * value) / 100).toFixed(2);
    case "em":
      return +(value * 16).toFixed(2);
    case "rem":
      return +(value * 16).toFixed(2);
    default: {
      return +value;
    }
  }
}

export function removeNullChildren(
  children: SplitPaneProps["children"]
): any[] {
  return React.Children.toArray(children).filter((c) => c);
}

export function convertToUnit(
  size: number,
  unit: "%" | "px" | "ratio" | "em" | "rem",
  containerSize?: number
) {
  switch (unit) {
    case "%":
      return `${((size / (containerSize ?? 0)) * 100).toFixed(2)}%`;
    case "px":
      return `${size.toFixed(2)}px`;
    case "em":
      return `${size.toFixed(2)}em`;
    case "rem":
      return `${size.toFixed(2)}rem`;
    case "ratio":
      return (size * 100).toFixed(0);
  }
}
