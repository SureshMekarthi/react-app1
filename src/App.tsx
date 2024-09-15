import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //Add
    setTags([...tags, "exciting"]);
    // remove
    setTags(tags.filter((tag) => tag != "happy"));

    //update

    setTags(tags.map((tag) => (tag == "happy" ? "hapiness" : tag)));

    return (
      <div>
        {}
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  };
}
export default App;
