import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    adress: {
      city: "San Francisco",
      zipCode: 28217,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      adress: { ...customer.adress, zipCode: 28218 },
    });
  };

  return (
    <div>
      {customer.adress.zipCode}
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}
export default App;
