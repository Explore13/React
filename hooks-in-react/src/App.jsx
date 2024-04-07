import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
let [count, setCounter] = useState(0);
  // let count = 15;
  const addValue = ()=>{
      count = count+1;
      setCounter(count)
      console.log(`Clicked : ${count}`);
    
  }

  const removeValue = ()=>{
    count = count-1;
    setCounter(count)
    console.log(`Clicked : ${count}`); 
  }

  return (
    <>
      <h1>Hare Krishna</h1>
      {count < 20 && count>=0 && <h3>Counter Value : {count}</h3>}
      

      <button disabled= {count <20 ? false : true} onClick={addValue}>Addvalue {count}</button>
      <br /> <br />
      <button disabled= {count >=0 ? false : true} onClick={removeValue} style={{backgroundColor : count < 20 ? 'red' : 'green'}}>RemoveValue {count}</button>
      <br />
      <footer>Footer : {count}</footer>

    </>
  );
}

export default App;
