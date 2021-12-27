import React, { ReactElement } from "react";

type ColumnComponentProps = {
  col: number;
  children: JSX.Element;
};

function ColumnComponent({
  col,
  children,
}: ColumnComponentProps): ReactElement {
  return <div className={`col-lg-${col}`}>{children}</div>;
}

export default ColumnComponent;
