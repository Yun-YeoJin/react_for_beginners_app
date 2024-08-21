import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");

  useEffect(() => {
    console.log("CALL THE API ONCE");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); //if keyword가 변환될 때만 실행되게 하기.
  useEffect(() => {
    console.log("counter is Changed");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword} //value가 change될 때만 검색하고 싶음.
        onChange={onChange}
        type="text"
        placeholder="Search Here..."
      />
      <h1>Welcome To MPS {counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
