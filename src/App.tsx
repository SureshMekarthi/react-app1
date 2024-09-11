import { useState } from "react";
import Like from "./components/ListGroup/Like";
function App() {
  return (
    <div>
      <Like onClick={() => console.log("Hello")}>Hello</Like>
    </div>
  );
}
export default App;
