import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";
import { LOCAL_STORAGE_USER } from "shared/const/localstorage";

const initialState: UserSchema = {
  authData: {
    id: "",
    username: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUser: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state, action: PayloadAction<User>) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logOut: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_USER);
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
