import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getConter";
import { CounterType } from "../../type/CounterType";

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterType) => counter.value
);
