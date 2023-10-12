import {
  ReducersMapObject,
  AnyAction,
  CombinedState,
  Reducer,
  EnhancedStore,
} from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
}

export type StateSchemeKey = keyof StateSchema;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemeKey, reducer: Reducer) => void;
  remove: (key: StateSchemeKey) => void;
}

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
