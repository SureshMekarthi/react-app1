import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const items = ["New York", "San Francisco", "Delhi", "Hyderabad"];
  return <div><ListGroup items={items}  heading ="Cities"></ListGroup></div>
}
export default App;