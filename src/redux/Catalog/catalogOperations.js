import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCatalogsAPI,
  addCatalogAPI,
  removeCatalogAPI,
  changeCatalogAPI,
} from "../../service/API/catalogsApi";

export const getCatalogs = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCatalogsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCatalog = createAsyncThunk(
  "products/addProduct",
  async (product, thunkAPI) => {
    try {
      const data = await addCatalogAPI(product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeCatalog = createAsyncThunk(
  "products/removeProduct",
  async (_, thunkAPI) => {
    try {
      const data = await removeCatalogAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeCatalog = createAsyncThunk(
  "products/changeProduct",
  async (product, thunkAPI) => {
    try {
      const data = await changeCatalogAPI(product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

