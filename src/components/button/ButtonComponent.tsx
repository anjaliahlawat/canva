import React, { ReactElement } from "react";

import styles from "./styles";

type ButtonProps = {
  children: JSX.Element;
  onClick: () => void;
};

function ButtonComponent({ children, onClick }: ButtonProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className="button button-hover"
      style={styles.button}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
