import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [mainvalue, setValue] = useState(1);
  // const [multipliedValue, setmultipliedValue] = useState(0);
  let multipliedValue = mainvalue * 5;
  
  const multiplyByFive = () => {
    // setmultipliedValue(value * 5);
    setValue(mainvalue + 1);
  };
  return (
    <>
      <h1>Main Value : {mainvalue}</h1>
      <button onClick={multiplyByFive}>Click to Multiply by 5</button>
      <h2>Multiplied Value : {multipliedValue}</h2>
    </>
  );
}

export default App;
