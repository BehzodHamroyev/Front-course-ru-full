// import { StateSchema } from 'app/providers/StoreProvider';
import {
  AnyAction,
  PayloadAction,
  Reducer,
  ReducersMapObject,
  combineReducers,
} from "@reduxjs/toolkit";
import { ReducerManager, StateSchema, StateSchemeKey } from "./StateSchema";

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemeKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((element) => {
          delete state[element];
        });

        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    add: (key: StateSchemeKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemeKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
