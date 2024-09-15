import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <div>
      {}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default App;
