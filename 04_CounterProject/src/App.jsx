import { useState } from 'react'
import './App.css'

function App() {
  
let [counter, setCounter] = useState(0);

// const addvalue = ()=>
// {
//   setCounter(counter+1)
//   setCounter(counter+1)
//   setCounter(counter+1)
//   setCounter(counter+1)
//   setCounter(counter+1)
// }

const addvalue = () =>{
  setCounter((prevCounter)=> prevCounter+1)
  setCounter((prevCounter)=> prevCounter+1)
  setCounter((prevCounter)=> prevCounter+1)
  setCounter((prevCounter)=> prevCounter+1)
  setCounter((prevCounter)=> prevCounter+1)
  setCounter((prevCounter)=> prevCounter+1)
}

const removeValue = ()=>
{
  setCounter(counter-1)
}
  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addvalue}>Addvalue : {counter}</button>
      <br /> <br />
      <button onClick={removeValue}>Removevalue : {counter}</button>
    </>
  )
};

export default App
