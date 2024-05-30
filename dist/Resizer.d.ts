import { default as React } from 'react';

interface ResizerProps extends React.HTMLAttributes<HTMLDivElement> {
    index: number;
    split: "vertical" | "horizontal";
}
declare const Resizer: ({ index, split, ...rest }: ResizerProps) => JSX.Element;
export default Resizer;
