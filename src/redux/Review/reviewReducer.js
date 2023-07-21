import { createSlice } from "@reduxjs/toolkit";
import { addReview } from "./reviewOperations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  review: null,
  isLoading: false,
  error: null,
  isModalOpen: false,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setNewDate: (state, { payload }) => {
      state.date = payload;
    },
    setModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addReview.pending, pending)
      .addCase(addReview.rejected, rejected)
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.review = payload;
        state.isModalOpen = true;
      }),
});



export default reviewsSlice.reducer;

export const { setNewDate, setModalOpen } = reviewsSlice.actions;
