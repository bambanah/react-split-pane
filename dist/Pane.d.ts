import { default as React, PureComponent } from 'react';

export interface PaneProps {
    children: React.ReactNode | React.ReactNode[];
    setRef?: (index: number, element: HTMLDivElement) => void;
    index?: number;
    className?: string;
    initialSize?: string | number;
    minSize?: string;
    maxSize?: string;
    split?: "vertical" | "horizontal";
    resizersSize?: number;
    size?: string;
}
declare class Pane extends PureComponent<PaneProps> {
    setRef: (element: HTMLDivElement) => void;
    render(): JSX.Element;
}
export default Pane;
