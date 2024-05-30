import { SplitPaneProps } from './SplitPane';

type Unit = "%" | "px" | "ratio" | "em" | "rem";
export declare function getUnit(size: string): Unit;
export declare function convertSizeToCssValue(value: string, resizersSize: number): string;
export declare function convert(str: string, size: number): number;
export declare function toPx(value: number, size: number, unit?: Unit): number;
export declare function removeNullChildren(children: SplitPaneProps["children"]): any[];
export declare function convertToUnit(size: number, unit: "%" | "px" | "ratio" | "em" | "rem", containerSize?: number): string;
export {};
