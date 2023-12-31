import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import {
  logInUserAPI,
  logOutUserAPI,
  updateTokenAPI,
} from "../../service/API/Auth&UserAPI";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logIn = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const data = await logInUserAPI(user);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(
          "Невірний логін або пароль. Будь ласка, перевірте введені дані!"
        );
        return rejectWithValue(error.message);
      }
      toast.error("Щось пішло не так. Будь ласка спробуйте ще раз!");

      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    token.set(persistedAccessToken);
    try {
      const data = await logOutUserAPI();
      token.unset();
      return data;
    } catch (error) {
      console.log(error);
      // toast.error("Щось пішло не так. Будь ласка спробуйте ще раз!");
      return rejectWithValue(error.response.status);
    }
  }
);

export const updateToken = createAsyncThunk(
  "auth/updateToken",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedID = state.auth.userData.id;
    if (!persistedID) {
      return rejectWithValue();
    }
    try {
      const data = await updateTokenAPI(persistedID);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
