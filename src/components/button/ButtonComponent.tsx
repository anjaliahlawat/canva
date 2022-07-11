import React, { ReactElement } from "react";

type ButtonProps = {
  children: JSX.Element;
  onClick: () => void;
};

function ButtonComponent({ children, onClick }: ButtonProps): ReactElement {
  return (
    <button type="button" onClick={onClick} className="button button-hover">
      {children}
    </button>
  );
}

export default ButtonComponent;
