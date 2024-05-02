import { useState } from 'react'
import './App.css'

function App() {
// console.log(process.env.REACT_APP_APPWRITE_URL); Fore create-react-app
console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div>
      <h1>Hare Krishna from APP.jsx</h1>
    </div>
  )
}

export default App
