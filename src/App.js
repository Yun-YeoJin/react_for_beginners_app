import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { func } from "prop-types";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]); //... : 배열의 요소 가져오기
    setTodo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li> //List 형식
      ))}
    </div>
  );
}
export default App;
