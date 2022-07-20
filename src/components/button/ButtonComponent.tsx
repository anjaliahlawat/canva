import React, { ReactElement } from "react";

type ButtonProps = {
  children: JSX.Element;
  selectionTool: Array<string | undefined>;
  tool: string | undefined;
  type: string | undefined;
  onClick: () => void;
};

function ButtonComponent({
  children,
  tool,
  type,
  selectionTool,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button palette-btn button-hover ${
        selectionTool.includes(tool) ? "active" : ""
      } ${type === "input" ? "palette-btn-input" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
