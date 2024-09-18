import { Immer } from "immer";
import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Chicken"] });
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <ul></ul>
    </>
  );
}
export default App;
