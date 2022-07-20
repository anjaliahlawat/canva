import React from "react";
import { Input } from "reactstrap";

type FontSizeBtnProps = {
  fontSize: string | undefined;
};

function FontSizeBtn({ fontSize }: FontSizeBtnProps) {
  return (
    <div className="font-size-btn">
      <Input className="font-size-input" defaultValue={fontSize} />
    </div>
  );
}

export default FontSizeBtn;
