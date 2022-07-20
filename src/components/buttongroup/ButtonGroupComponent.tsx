import React, { ReactElement } from "react";

import ButtonComponent from "../button/ButtonComponent";
import FontSizeBtn from "../FontSizeBtn";

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

  const setToolIcon = (tool) => {
    if (tool.tool === "Font-size") {
      return <FontSizeBtn fontSize={tool.icon} />;
    }
    return <h6>{tool.icon}</h6>;
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
                type={tool.type}
                onClick={() => onShapeSelected(tool.tool)}
              >
                {setToolIcon(tool)}
              </ButtonComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonGroupComponent;
