import { useState } from "react";
import "./App.css";

function App() {
  console.log("App Rendered !!!", Math.random() * 100);
  // const [value, setValue] = useState(0);

  const [newValue, setnewValue] = useState({
    value: 0,
  });
  const clickMe = () => {
    // setValue(value+1); // app will be rendered because the value is changing.

    // console.log("Hare Krishna !!"); // While using only this, app will not be ren-rendered on clicking the button.

    // setValue(0) // app will not be rendered because the value is same to the default value.

    // setValue(3); // Will be rendered for two times as the value is changed. Second time checking is happened due to safety point to check if it is changed or not. After that no rendering will be happened.


    

    // ****Non primitive datatype**** As newValue is an object it means everytime we pass a new reference to the app and we know when a new value comes, app will be rendered. So, the app will be re-rendered.
    setnewValue({
      value: 0,
    })
  };

  /* 
  Note : 
  While using useEffect we should take the newValue.value in the dependency array. Because if we take newValue, then everytime the app will rendered as it is an object and value is passed by reference. So, we use newValue.value to ensure that the app will be re-rendered when "value" will be changed.
  */

  return (
    <>
      {/* <h1>Value : {value}</h1> */}
      <h1>Value : {newValue.value}</h1>
      <button onClick={clickMe}>Click Me</button>
    </>
  );
}

export default App;
