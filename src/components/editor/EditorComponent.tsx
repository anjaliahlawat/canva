import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";

type EditorProps = {
  selectionTool: string;
};

function EditorComponent({ selectionTool }: EditorProps) {
  const [editorStyle, setEditorStyle] = useState<React.CSSProperties>({
    color: "black",
    fontWeight: "normal",
  });

  useEffect(() => {
    setTextStyle();
  }, [selectionTool]);

  const setTextStyle = () => {
    const temp = { ...editorStyle };

    if (selectionTool === "Bold") {
      temp.fontWeight = "bold";
    } else if (selectionTool === "Italic") {
      temp.fontStyle = "italic";
    } else if (selectionTool === "Underline") {
      temp.textDecorationLine = "underline";
    }

    setEditorStyle(temp);
  };

  return (
    <div className="container-fluid editor-container">
      <div className="row">
        <Input
          className="editor"
          type="textarea"
          defaultValue="Hello world"
          style={editorStyle}
        />
      </div>
    </div>
  );
}

export default EditorComponent;
