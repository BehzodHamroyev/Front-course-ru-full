import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterAction } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selector/getCounterValue/getCounterValue";

const Counter = () => {
  const dispatch = useDispatch();

  const selecterCounter = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <>
      <div data-testid="valueCounter">{selecterCounter}</div>
      <Button onClick={increment} data-testid="increment-btn">
        Increment
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        decrement
      </Button>
    </>
  );
};

export default Counter;
