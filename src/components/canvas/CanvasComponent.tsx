import React, { useState } from "react";
import ButtonGroupComponent from "../buttongroup/ButtonGroupComponent";
import EditorComponent from "../editor/EditorComponent";
// import circle from "../../assets/shapes/circle.png";
// import square from "../../assets/shapes/square.png";
// import rectangle from "../../assets/shapes/rectangle.png";
// import rhombus from "../../assets/shapes/rhombus.png";

function CanvasComponent(props) {
  const tools = [
    {
      tool: "Bold",
      icon: "B",
    },
    {
      tool: "Italic",
      icon: "I",
    },
    {
      tool: "Underline",
      icon: "U",
    },
    {
      tool: "Text-Color",
      icon: "A",
    },
    {
      tool: "Font-size",
      icon: "12",
    },
  ];
  const [selectionTool, setSelectionTool] = useState<Array<string>>([]);

  const onSelect = (tool) => {
    const temp: Array<string> = [...selectionTool];
    temp.push(tool);
    setSelectionTool(temp);
  };

  return (
    <div className="container-fluid component-canvas">
      <div className="row">
        <div className="col-12 offset-sm-1 col-lg-2">
          <ButtonGroupComponent
            tools={tools}
            selectionTool={selectionTool}
            setSelectionTool={onSelect}
          />
        </div>
        <div className="col-12 col-lg-8">
          <EditorComponent selectionTool={selectionTool} />
        </div>
      </div>
    </div>
  );
}

export default CanvasComponent;
