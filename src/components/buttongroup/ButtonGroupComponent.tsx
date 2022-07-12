import React, { ReactElement } from "react";

import ButtonComponent from "../button/ButtonComponent";

type ButtonGroupProps = {
  tools: Record<string, string>[];
  selectionTool: Array<string | undefined>;
  // eslint-disable-next-line no-unused-vars
  setSelectionTool: (tool: string) => void;
};

function ButtonGroupComponent({
  tools,
  selectionTool,
  setSelectionTool,
}: ButtonGroupProps): ReactElement {
  const onShapeSelected = (tool) => {
    setSelectionTool(tool);
  };

  return (
    <div className="buttonGroup">
      <div className="d-flex flex-wrap">
        {tools.map((tool, key) => {
          return (
            <div className="p-1" key={key}>
              <ButtonComponent
                selectionTool={selectionTool}
                tool={tool.tool}
                onClick={() => onShapeSelected(tool.tool)}
              >
                <h6>{tool.icon}</h6>
              </ButtonComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonGroupComponent;
