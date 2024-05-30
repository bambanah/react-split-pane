import React from "react";
import { SplitPaneProps } from "./SplitPane";

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

export function convert(str: string, size: number) {
  const tokens = str.match(/([0-9]+)([px|%]*)/) as RegExpMatchArray;

  const value = tokens[1];
  const unit = tokens[2];

  return toPx(parseInt(value), size, unit);
}

export function toPx(value: number, size: number, unit = "px") {
  switch (unit) {
    case "%": {
      return +((size * value) / 100).toFixed(2);
    }
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
