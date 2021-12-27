import React, { ReactElement } from "react";

import ButtonComponent from "../button/ButtonComponent";
import circle from "../../assets/shapes/circle.png";
import square from "../../assets/shapes/square.png";
import rectangle from "../../assets/shapes/rectangle.png";
import rhombus from "../../assets/shapes/rhombus.png";
import styles from "./styles";

const tools = [
  { tool: "circle", image: circle },
  { tool: "square", image: square },
  { tool: "rectangle", image: rectangle },
  { tool: "rhombus", image: rhombus },
];

type ButtonGroupProps = {
  selectionTool: string | undefined;
  // eslint-disable-next-line no-unused-vars
  setSelectionTool: (tool: string) => void;
};

function ButtonGroupComponent({
  selectionTool,
  setSelectionTool,
}: ButtonGroupProps): ReactElement {
  const onShapeSelected = (tool) => {
    setSelectionTool(tool);
  };

  return (
    <div className="d-flex buttonGroup flex-wrap" style={styles.buttonGroup}>
      {tools.map((tool, key) => {
        return (
          <div className="p-2" key={key}>
            <ButtonComponent onClick={() => onShapeSelected(tool.tool)}>
              <img
                className="shapeImage"
                src={tool.image}
                style={styles.shapeImage}
              />
            </ButtonComponent>
          </div>
        );
      })}
    </div>
  );
}

export default ButtonGroupComponent;
