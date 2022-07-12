import React from "react";
import CanvasComponent from "src/components/canvas/CanvasComponent";

function HomeScreen(props) {
  return (
    <div className="container-fluid screen-home">
      <div className="row screen-home_row1">
        <h4>Canva</h4>
      </div>
      <div className="row screen-home_row2">
        <CanvasComponent />
      </div>
    </div>
  );
}

export default HomeScreen;
