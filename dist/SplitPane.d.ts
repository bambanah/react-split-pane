export interface SplitPaneProps {
    children: any[];
    className?: string;
    split?: "vertical" | "horizontal";
    resizerSize?: number;
    onChange?: (sizes: string[]) => void;
    onResizeStart?: () => void;
    onResizeEnd?: (sizes: string[]) => void;
    allowResize?: boolean;
}
declare const SplitPane: ({ children, className, split, allowResize, onResizeStart, onResizeEnd, onChange, resizerSize, }: SplitPaneProps) => import("react/jsx-runtime").JSX.Element;
export default SplitPane;
