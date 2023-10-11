import { DeepPartial } from "@reduxjs/toolkit";
import { ReduxStateInterfces } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  it("should return value ", () => {
    const state: DeepPartial<ReduxStateInterfces> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as ReduxStateInterfces)).toEqual(10);
  });
});
