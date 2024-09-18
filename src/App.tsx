import produce, { Immer } from "immer";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 2 } : item
      ),
    });

    // setCart(
    //   produce((draft) => {
    //     const result = draft.items.find((item) => item.id === 1);
    //     if (result) result.quantity = 2;
    //   })
    // );
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
