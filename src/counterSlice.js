import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementBy: (state, action) => {
      state.value += action.payload
    },
  },
})

export const incrementAsync = (action) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementBy(action))
  }, 1000)
}

export const { increment, decrement, incrementBy } = counterSlice.actions

export const selectCounter = (state) => state.counter.value

export default counterSlice.reducer
