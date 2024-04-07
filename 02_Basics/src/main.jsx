import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Chai from "./chai.jsx";


function MyApp() {
  return (
 <div>
   <h1>Hare Krishna</h1>
      <Chai />
 </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// }

const anothetUser = "Chai aur react"

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target: "_blank"},
  'click me to visit google',
  anothetUser
)
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

ReactDOM.createRoot(document.getElementById("root")).render(
  ReactElement
  // <App/>
  
);
