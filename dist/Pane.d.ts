import { default as React } from 'react';
export default Pane;
declare class Pane extends React.PureComponent<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    setRef: (element: any) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
declare namespace Pane {
    namespace propTypes {
        let children: any;
        let innerRef: any;
        let index: any;
        let className: any;
        let initialSize: any;
        let minSize: any;
        let maxSize: any;
        let split: any;
    }
    namespace defaultProps {
        let initialSize_1: string;
        export { initialSize_1 as initialSize };
        let split_1: string;
        export { split_1 as split };
        let minSize_1: string;
        export { minSize_1 as minSize };
        let maxSize_1: string;
        export { maxSize_1 as maxSize };
    }
}
