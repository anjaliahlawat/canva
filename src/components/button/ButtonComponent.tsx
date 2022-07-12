import React, { ReactElement } from "react";

type ButtonProps = {
  children: JSX.Element;
  selectionTool: Array<string | undefined>;
  tool: string | undefined;
  onClick: () => void;
};

function ButtonComponent({
  children,
  tool,
  selectionTool,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button palette-btn button-hover ${
        selectionTool.includes(tool) ? "active" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
