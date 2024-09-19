import produce, { Immer } from "immer";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText></ExpandableText>
    </div>
  );
}
export default App;
