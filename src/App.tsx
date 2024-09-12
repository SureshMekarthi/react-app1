import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [drink, setDrink] = useState({
    tittle: "Americano",
    price: 5,
  });
  const handleClick = () => {
    drink.price = 6;
  };

  return (
    <div>
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}
export default App;
