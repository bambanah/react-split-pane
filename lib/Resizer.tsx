import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #000;
  opacity: 0.2;
  z-index: 1;
  box-sizing: border-box;
  background-clip: padding-box;

  :hover {
    transition: all 2s ease;
  }
`;

const HorizontalWrapper = styled(Wrapper)`
  height: 11px;
  margin: -5px 0;
  border-top: 5px solid rgba(255, 255, 255, 0);
  border-bottom: 5px solid rgba(255, 255, 255, 0);
  cursor: row-resize;
  width: 100%;

  :hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .disabled {
    cursor: not-allowed;
  }
  .disabled:hover {
    border-color: transparent;
  }
`;

const VerticalWrapper = styled(Wrapper)`
  width: 11px;
  margin: 0 -5px;
  border-left: 5px solid rgba(255, 255, 255, 0);
  border-right: 5px solid rgba(255, 255, 255, 0);
  cursor: col-resize;

  :hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  .disabled {
    cursor: not-allowed;
  }
  .disabled:hover {
    border-color: transparent;
  }
`;

interface ResizerProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  split: "vertical" | "horizontal";
}

const Resizer = ({ index, split = "vertical", ...rest }: ResizerProps) => {
  const resizer = React.useRef<HTMLDivElement>(null);

  const props: HTMLAttributes<HTMLDivElement> & {
    "data-attribute": "vertical" | "horizontal";
    "data-type": "Resizer";
    ref: React.RefObject<HTMLDivElement>;
  } = {
    "data-attribute": split,
    "data-type": "Resizer",
    ref: resizer,
    className: "react-split-pane__Resizer",
    ...rest,
  };

  return split === "vertical" ? (
    <VerticalWrapper {...props} />
  ) : (
    <HorizontalWrapper {...props} />
  );
};

export default Resizer;
