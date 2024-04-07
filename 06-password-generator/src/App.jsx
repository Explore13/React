import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? 'red' : 'green',
    transition: 'background-color 0.5s',
  };

  // useRef hook

  const passRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  }, [password]);

  // useCallback hook

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let chars = "!@#$%^&";

    if (numberAllowed) str += numbers;
    if (charAllowed) str += chars;

    for (let index = 1; index <= length; index++) {
      const charIndex = Math.floor(Math.random() * str.length + 1);

      pass = pass + str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />

        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipBoard}
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label style={{ color: "green" }}>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" style={{ color: "green" }}>
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput" style={{ color: "green" }}>
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
