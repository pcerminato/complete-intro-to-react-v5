import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

export default function App() {
  return <Pet name="Perriti" breed="Caniche" animal="Dog" />;
}

render(<App />, document.getElementById("root"));
