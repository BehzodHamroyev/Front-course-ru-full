import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { log } from "console";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER } from "shared/const/localstorage";

interface LoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername>(
  "login/loginByUsername",

  async (dataUser: LoginByUsername, thunkApi) => {
    try {
      const response = await axios.post<User>(
        "http://localhost:8000/login",
        dataUser
      );

      thunkApi.dispatch(userActions.setDataUser(response.data)); //this code help for save data in redux

      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(response.data)); // this code help  to save token in localstatorage
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(thunkApi.rejectWithValue(e.response.data));
    }
  }
);
