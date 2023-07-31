import { createAsyncThunk } from '@reduxjs/toolkit';
import { addReviewAPI, getAllReviewsAPI } from '../../service/API/reviewsApi';

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (review, thunkAPI) => {
    try {
      const data = await addReviewAPI(review);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllReviews = createAsyncThunk(
  "reviews/getAllReviews",
  async (_, thunkAPI) => {
    try {
      const data = await getAllReviewsAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
