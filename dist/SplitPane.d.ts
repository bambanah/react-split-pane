import { default as React, Component } from 'react';

export declare function getUnit(size: string): "px" | "%" | "ratio";
export declare function convertSizeToCssValue(value: string, resizersSize: number): string;
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
declare class SplitPane extends Component<SplitPaneProps, SplitPaneState> {
    splitPane: React.RefObject<HTMLDivElement>;
    paneElements: HTMLElement[];
    resizerIndex: number;
    dimensionsSnapshot: any;
    startClientX: number;
    startClientY: number;
    constructor(props: SplitPaneProps);
    componentWillReceiveProps(nextProps: SplitPaneProps): void;
    componentWillUnmount(): void;
    onMouseDown: (event: MouseEvent, resizerIndex: number) => void;
    onTouchStart: (event: TouchEvent, resizerIndex: number) => void;
    onDown: (resizerIndex: number, clientX: number, clientY: number) => void;
    onMouseMove: (event: MouseEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onMouseUp: (event: MouseEvent | TouchEvent) => void;
    getDimensionsSnapshot(props: SplitPaneProps): {
        resizersSize: number;
        paneDimensions: DOMRect[];
        splitPaneSizePx: number;
        minSizesPx: (number | undefined)[];
        maxSizesPx: (number | undefined)[];
        sizesPx: number[];
    } | undefined;
    getPanePropSize(props: SplitPaneProps): string[];
    getPanePropMinMaxSize(props: SplitPaneProps, key: "minSize" | "maxSize"): any[];
    getPaneDimensions(): DOMRect[];
    getSizes(): string[];
    onMove(clientX: number, clientY: number): void;
    setPaneRef: (idx: number, el: HTMLDivElement) => void;
    getResizersSize(children: SplitPaneProps["children"]): number;
    render(): JSX.Element;
}
export default SplitPane;
