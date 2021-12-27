import React, { ReactElement } from "react";
import HomeScreen from "./screens/home/HomeScreen";
import "./scss/App.scss";

function App(): ReactElement {
  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
