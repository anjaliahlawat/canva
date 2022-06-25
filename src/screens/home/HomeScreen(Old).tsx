import React, { ReactElement, useState } from "react";

import ButtonGroupComponent from "../../components/buttongroup/ButtonGroupComponent";
import CanvasComponent from "../../components/canvas/CanvasComponent(old)";
import ColumnComponent from "../../components/column/ColumnComponent";
import styles from "./styles";

function HomeScreen(): ReactElement {
  const [selectionTool, setSelectionTool] = useState<string>();

  return (
    <div className="container-fluid homeScreen" style={styles.homeScreen}>
      <div className="row">
        <ColumnComponent col={3}>
          <ButtonGroupComponent
            selectionTool={selectionTool}
            setSelectionTool={(tool) => setSelectionTool(tool)}
          />
        </ColumnComponent>
        <ColumnComponent col={9}>
          <CanvasComponent selectionTool={selectionTool} />
        </ColumnComponent>
      </div>
    </div>
  );
}

export default HomeScreen;
