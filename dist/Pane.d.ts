import { default as React } from 'react';

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
declare const Pane: ({ children, className, setRef, index, ...rest }: PaneProps) => import("react/jsx-runtime").JSX.Element;
export default Pane;
