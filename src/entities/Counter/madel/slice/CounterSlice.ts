import { createSlice } from "@reduxjs/toolkit";
import { CounterType } from "../type/CounterType";

const initialState: CounterType = {
  value: 0,
};

export const conunterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { actions: counterAction } = conunterSlice;
export const { reducer: counterReducer } = conunterSlice;
