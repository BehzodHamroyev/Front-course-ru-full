import { ReduxStateInterfces } from "app/providers/StoreProvider";

export const getCounter = (state: ReduxStateInterfces) => state.counter;
