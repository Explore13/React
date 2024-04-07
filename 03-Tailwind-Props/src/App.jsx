import { useState } from "react";
import "./App.css";
import Card from "./components/Card";


function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name : "SuryaGhosh",
    channel : "ChaiAurCode",
    age : 19
  }

  let myArr = [1,2,3,4,5];
  return (
    // <>
    // <h1 className='bg-green-300 p-4 rounded-full'>Hare Krishna</h1>
    // </>

    <>
      {/* <Details/> */}
      <Card myName="Surya" btnText="Click Me"/>
      <Card myName="Rohit" btnText="Hover Me"/>
      <Card myName="Rohit"/>
    </>
  );
}

export default App;
