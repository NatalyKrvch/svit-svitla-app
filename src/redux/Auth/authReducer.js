import { createSlice } from "@reduxjs/toolkit";
import { logIn, logout, updateToken } from "./authOperations";

const pending = (state) => {
  state.isUserFetching = true;
};
const rejected = (state) => {
  state.isUserFetching = false;
  state.isLoggedIn = false;
};

const initialState = {
  accessToken: null,
  isLoggedIn: false,
  isUserFetching: false,
  userData: {
    email: null,
    id: null,
  },
  isModalOpen:false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    setModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, pending)
      .addCase(logIn.rejected, rejected)
      .addCase(logout.pending, pending)
      .addCase(logout.rejected, rejected)
      .addCase(updateToken.pending, pending)
      .addCase(updateToken.rejected, rejected)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.userData = {
          login: payload.login,
          id: payload.id,
        };
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isModalOpen = true;
        state.isUserFetching = false;
      })
      .addCase(logout.fulfilled, () => ({ ...initialState }))
      .addCase(updateToken.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
      }),
});

export default authSlice.reducer;

export const { addAccessToken, setModalOpen } = authSlice.actions;
