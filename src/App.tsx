import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const items = ["New York", "San Francisco", "Delhi", "Hyderabad"];
  const handleSelectedItem = (item:string)=>{
    console.log(item)
  }
  return <div><ListGroup items={items}  heading ="Cities" onSelectItem={handleSelectedItem}></ListGroup></div>
}
export default App;