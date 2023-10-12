import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./ReducerManager";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  const reducerManger = createReducerManager(rootReducers);

  console.log(reducerManger.reduce, "rediucecsd");

  const store = configureStore<StateSchema>({
    reducer: reducerManger.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  //@ts-ignore
  store.reducerManger = reducerManger;
  return store;
}
