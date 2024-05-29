import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
export default Pane;
declare class Pane extends React.PureComponent<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    setRef: (element: any) => void;
    render(): JSX.Element;
}
declare namespace Pane {
    namespace propTypes {
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let setRef: PropTypes.Requireable<(...args: any[]) => any>;
        let index: PropTypes.Requireable<number>;
        let className: PropTypes.Requireable<string>;
        let initialSize: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        let minSize: PropTypes.Requireable<string>;
        let maxSize: PropTypes.Requireable<string>;
        let split: PropTypes.Requireable<string>;
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
