import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginTypes } from "../types/LoginTypes";
import { loginByUsername } from "../services/loginByUsername/LoginByUserName";

const initialState: LoginTypes = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
};

export const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: AuthAction } = AuthSlice;
export const { reducer: AuthReducer } = AuthSlice;
