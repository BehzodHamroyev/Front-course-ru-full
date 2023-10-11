import { configureStore } from "@reduxjs/toolkit";
import ReduxStateInterfces from "./ReduxInterfaces";
import Counter from "entities/Counter/ui/Counter";
import { counterReducer } from "entities/Counter";

export const creatReduxStore = (innitialState: ReduxStateInterfces) => {
  return configureStore<ReduxStateInterfces>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: innitialState,
  });
};

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
