import { default as React } from 'react';
export function getUnit(size: any): "px" | "%" | "ratio";
export function convertSizeToCssValue(value: any, resizersSize: any): any;
export default SplitPane;
declare class SplitPane extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        sizes: string[];
    };
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    onMouseDown: (event: any, resizerIndex: any) => void;
    onTouchStart: (event: any, resizerIndex: any) => void;
    onDown: (resizerIndex: any, clientX: any, clientY: any) => void;
    resizerIndex: any;
    dimensionsSnapshot: {
        resizersSize: number;
        paneDimensions: any[];
        splitPaneSizePx: number;
        minSizesPx: number[];
        maxSizesPx: number[];
        sizesPx: any[];
    } | undefined;
    startClientX: any;
    startClientY: any;
    onMouseMove: (event: any) => void;
    onTouchMove: (event: any) => void;
    onMouseUp: (event: any) => void;
    getDimensionsSnapshot(props: any): {
        resizersSize: number;
        paneDimensions: any[];
        splitPaneSizePx: number;
        minSizesPx: number[];
        maxSizesPx: number[];
        sizesPx: any[];
    };
    getPanePropSize(props: any): string[];
    getPanePropMinMaxSize(props: any, key: any): any[];
    getPaneDimensions(): any[];
    getSizes(): string[];
    onMove(clientX: any, clientY: any): void;
    setPaneRef: (idx: any, el: any) => void;
    paneElements: any[] | undefined;
    getResizersSize(children: any): number;
    render(): import("react/jsx-runtime").JSX.Element;
    splitPane: any;
}
declare namespace SplitPane {
    namespace propTypes {
        let children: any;
        let className: any;
        let split: any;
        let resizerSize: any;
        let onChange: any;
        let onResizeStart: any;
        let onResizeEnd: any;
        let allowResize: any;
    }
    namespace defaultProps {
        let split_1: string;
        export { split_1 as split };
        let resizerSize_1: number;
        export { resizerSize_1 as resizerSize };
        let allowResize_1: boolean;
        export { allowResize_1 as allowResize };
    }
}
