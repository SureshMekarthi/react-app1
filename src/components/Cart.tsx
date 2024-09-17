import React from "react";
interface Props {
  cartItems: string[];
  onClick: () => void;
}
function Cart({ cartItems, onClick }: Props) {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClick}>Clear</button>
    </>
  );
}

export default Cart;
