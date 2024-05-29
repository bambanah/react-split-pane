import { default as React } from "react";
import { default as PropTypes } from "prop-types";
export function getUnit(size: any): "px" | "%" | "ratio";
export function convertSizeToCssValue(value: any, resizersSize: any): any;
export default SplitPane;
declare class SplitPane extends React.Component<any, any, any> {
  constructor(props: any);
  splitPane: React.RefObject<any>;
  state: {
    sizes: string[];
  };
  componentWillReceiveProps(nextProps: any): void;
  componentWillUnmount(): void;
  onMouseDown: (event: any, resizerIndex: any) => void;
  onTouchStart: (event: any, resizerIndex: any) => void;
  onDown: (resizerIndex: any, clientX: any, clientY: any) => void;
  resizerIndex: any;
  dimensionsSnapshot:
    | {
        resizersSize: number;
        paneDimensions: any[];
        splitPaneSizePx: number;
        minSizesPx: number[];
        maxSizesPx: number[];
        sizesPx: any[];
      }
    | undefined;
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
  render(): JSX.Element;
}
declare namespace SplitPane {
  namespace propTypes {
    let children: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
    let className: PropTypes.Requireable<string>;
    let split: PropTypes.Requireable<string>;
    let resizerSize: PropTypes.Requireable<number>;
    let onChange: PropTypes.Requireable<(...args: any[]) => any>;
    let onResizeStart: PropTypes.Requireable<(...args: any[]) => any>;
    let onResizeEnd: PropTypes.Requireable<(...args: any[]) => any>;
    let allowResize: PropTypes.Requireable<boolean>;
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
