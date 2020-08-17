import React from "react";
import { UiButton } from "./commonUi/uiButton/uiButton";

function App() {
  return (
    <div className="App">
      <UiButton href="www.google.com" buttonText="submit" ariaLabel="submit" />
    </div>
  );
}

export default App;
