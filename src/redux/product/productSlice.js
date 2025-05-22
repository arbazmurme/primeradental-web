import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Baseurl = process.env.NEXT_PUBLIC_BASE_URL;

const initialState = {
  dealOfTheDay: [],
  hotProducts: [], 
  productLoading: false,
  isProductAvailable: false,
  error: null,
};

export const getTrendingProducts = createAsyncThunk(
  'product/getTrendingProducts',
  async (_, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/product/dealoftheday`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getHotProducts = createAsyncThunk(
  'product/getHotProducts',
  async (_, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/product/trending-limit`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Trending Products
      .addCase(getTrendingProducts.pending, (state) => {
        state.productLoading = true;
        state.error = null;
      })
      .addCase(getTrendingProducts.fulfilled, (state, action) => {
        state.productLoading = false;
        if (action.payload?.success) {
          state.dealOfTheDay = action.payload;
          state.isProductAvailable = true;
          if (typeof window !== 'undefined') {
            localStorage.setItem('dealOfTheDay', JSON.stringify(action.payload));
          }
        }
      })
      .addCase(getTrendingProducts.rejected, (state, action) => {
        state.productLoading = false;
        state.error = action.payload;
      })
      
      // Hot Products
      .addCase(getHotProducts.pending, (state) => {
        state.productLoading = true;
        state.error = null;
      })
      .addCase(getHotProducts.fulfilled, (state, action) => {
        state.productLoading = false;
        if (action.payload?.success) {
          state.hotProducts = action.payload;
          state.isProductAvailable = true;
          if (typeof window !== 'undefined') {
            localStorage.setItem('hotProducts', JSON.stringify(action.payload));
          }
        }
      })
      .addCase(getHotProducts.rejected, (state, action) => {
        state.productLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;