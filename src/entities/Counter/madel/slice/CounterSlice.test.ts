import { CounterType } from "../type/CounterType";
import { counterAction, counterReducer } from "./CounterSlice";

describe("CounterSlice", () => {
  it("decriment", () => {
    const state: CounterType = { value: 10 };

    expect(
      counterReducer(state as CounterType, counterAction.decrement())
    ).toEqual({ value: 9 });
  });

  it("increment", () => {
    const state: CounterType = { value: 10 };

    expect(
      counterReducer(state as CounterType, counterAction.increment())
    ).toEqual({ value: 11 });
  });

  it("with out innitial state", () => {
    expect(counterReducer(undefined, counterAction.increment())).toEqual({
      value: 1,
    });
  });
});
