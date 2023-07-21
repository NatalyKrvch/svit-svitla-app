import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

import { logInUserAPI, logOutUserAPI } from "../../service/API/Auth&UserAPI";

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
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUserAPI();
      token.unset();
      return data;
    } catch (error) {
      toast.error("Щось пішло не так. Будь ласка спробуйте ще раз!");
      return rejectWithValue(error.response.status);
    }
  }
);
