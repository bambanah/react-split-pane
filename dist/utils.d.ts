import { SplitPaneProps } from './SplitPane';

export declare function getUnit(size: string): "%" | "px" | "ratio";
export declare function convertSizeToCssValue(value: string, resizersSize: number): string;
export declare function convert(str: string, size: number): number;
export declare function toPx(value: number, size: number, unit?: string): number;
export declare function removeNullChildren(children: SplitPaneProps["children"]): any[];
export declare function convertToUnit(size: number, unit: "%" | "px" | "ratio", containerSize?: number): string;
