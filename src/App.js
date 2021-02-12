import "./App.css"
import React, { useState } from "react"

function App() {
  const [custonNumber, setCustomNumber] = useState(0)

  return (
    <div>
      <h1>1</h1>
      <button>add 1</button>
      <button>subtract 1</button>
      <div>
        <input value={custonNumber} onChange={setCustomNumber} />
        <button>increment by input</button>
        <button>increment asynchronously</button>
      </div>
    </div>
  )
}

export default App
