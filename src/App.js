import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { func } from "prop-types";

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

function Hello() {
  // function destroyedFn() {
  //   console.log("Bye!!!");
  // }
  // function effectFn() {
  //   console.log("Created!!!");
  //   return destroyedFn;
  // }
  useEffect(function () {
    console.log("Created!!!");
    return function () {
      console.log("Bye!!!!");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App2() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}

      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App2;
