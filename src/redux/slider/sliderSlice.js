import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const initialState = {
  mainHomeSliderTotal: [],
  mainHomeSliderLoading: true,
  isMainHomeSliderAvailable: false,
};

export const getMain_home_Slider = createAsyncThunk(
  'slider/getMain_home_Slider',
  async (_, thunkAPI) => {
    try {
      const url = `${BaseUrl}/api/v1/slider/all`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('404 Not Found');
    }
  }
);

const SliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMain_home_Slider.pending, (state) => {
        state.mainHomeSliderLoading = true;
      })
      .addCase(getMain_home_Slider.fulfilled, (state, action) => {
        state.mainHomeSliderTotal = action.payload.sliders;
        state.mainHomeSliderLoading = false;
        state.isMainHomeSliderAvailable = true;

        // Safe localStorage access (client-only)
        if (typeof window !== 'undefined') {
          localStorage.setItem(
            'mainHomeSliderTotal',
            JSON.stringify(state.mainHomeSliderTotal)
          );
        }
      })
      .addCase(getMain_home_Slider.rejected, (state) => {
        state.mainHomeSliderLoading = false;
      });
  },
});

export default SliderSlice.reducer;
