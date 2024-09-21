import produce, { Immer } from "immer";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi in
        ea nulla. Possimus vitae ullam dolore odit deleniti optio beatae porro
        id vero, quisquam natus at vel similique est suscipit!
      </ExpandableText>
    </div>
  );
}
export default App;
