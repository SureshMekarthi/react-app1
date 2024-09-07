import "./App.css";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const items = ["New York", "Los Angleles", "San Francisco"];
  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={() => console.log("clicked")}
      ></ListGroup>
    </div>
  );
}
export default App;
