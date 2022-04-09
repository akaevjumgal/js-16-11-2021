import { createSlice } from "@reduxjs/toolkit";
import { getBaconsThunk } from "./counterThunk";

const initialState = {
  value: 0,
  loading: true,
  bacons: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1
      }
    },
    setByAmount: (state, { payload }) => {
      state.value = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBaconsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.bacons = action.payload;
    })
  }
})

export const { increment, decrement, setByAmount } = counterSlice.actions

export default counterSlice.reducer