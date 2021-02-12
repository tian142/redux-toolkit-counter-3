import "./App.css"
import React, { useState } from "react"
import {
  increment,
  decrement,
  incrementBy,
  incrementAsync,
  selectCounter,
} from "./counterSlice"

import { useSelector, useDispatch } from "react-redux"

function App() {
  const [custonNumber, setCustomNumber] = useState(0)

  const number = useSelector(selectCounter)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => dispatch(increment())}>add 1</button>
      <button onClick={() => dispatch(decrement())}>subtract 1</button>
      <div>
        <input
          value={custonNumber}
          onChange={(e) => setCustomNumber(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementBy(Number(custonNumber) || 0))}
        >
          increment by input
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(custonNumber) || 0))}
        >
          increment asynchronously
        </button>
      </div>
    </div>
  )
}

export default App
