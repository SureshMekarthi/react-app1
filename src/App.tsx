import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const [alertvisibility, setalertVisibility] = useState(false);
  return (
    <div>
      {alertvisibility && (
        <Alert onClick={() => setalertVisibility(false)}>Alert</Alert>
      )}
      <Button onClick={() => setalertVisibility(true)}>my button</Button>
    </div>
  );
}
export default App;
