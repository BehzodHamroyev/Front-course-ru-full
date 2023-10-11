import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from "./getConter";
import { ReduxStateInterfces } from "app/providers/StoreProvider";

describe("getCounter", () => {
  it("should return counter value", () => {
    const state: DeepPartial<ReduxStateInterfces> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as ReduxStateInterfces)).toEqual({value:10});
  });
});
