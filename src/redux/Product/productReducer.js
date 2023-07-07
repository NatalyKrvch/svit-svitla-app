import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  removeProduct,
  changeProduct,
  getProductById,
} from "./productOperations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  products: [],
  currentProduct: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setNewDate: (state, { payload }) => {
      state.date = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, pending)
      .addCase(getProducts.rejected, rejected)
      .addCase(addProduct.pending, pending)
      .addCase(addProduct.rejected, rejected)
      .addCase(removeProduct.pending, pending)
      .addCase(removeProduct.rejected, rejected)
      .addCase(changeProduct.pending, pending)
      .addCase(changeProduct.rejected, rejected)
      .addCase(getProductById.pending, pending)
      .addCase(getProductById.rejected, rejected)
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // state.products.push(...payload);
        state.products=payload;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.products.push(payload);
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.products = state.products.filter(
          (product) => product._id !== payload._doc._id
        );
      })
      .addCase(changeProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.products = state.products
          .filter((product) => product._id !== payload._id)
          .push(...payload); //переделать скорее всего !!!
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentProduct = payload;
        // state.expences.transactions = payload.expenses;
        // state.expences.stats = payload.monthsStats;
      }),
});

export default productsSlice.reducer;

export const { setNewDate } = productsSlice.actions;
