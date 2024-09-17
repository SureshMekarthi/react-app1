import { Immer } from "immer";
import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, SetcartItems] = useState(["Product1", "Product2"]);

  const handleClick = () => {};
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems}></Cart>
    </div>
  );
}
export default App;
