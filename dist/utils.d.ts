import { default as React } from 'react';
import { SplitPaneProps } from './SplitPane';

type Unit = "%" | "px" | "ratio" | "em" | "rem";
export declare function getUnit(size: string): Unit;
export declare function convertSizeToCssValue(value: string, resizersSize: number): string;
export declare function convert(str: string, size: number): number;
export declare function toPx(value: number, size: number, unit?: Unit): number;
export declare function removeNullChildren(children: SplitPaneProps["children"]): (React.ReactChild | React.ReactFragment | React.ReactPortal)[];
export declare function convertToUnit(size: number, unit: "%" | "px" | "ratio" | "em" | "rem", containerSize?: number): string;
export {};
