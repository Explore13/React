import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  return (
    <>
    <div className='font-bold text-2xl'>MY TO-DO LIST</div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
