import { configureStore } from "@reduxjs/toolkit";
import atheReducer from "./auth/authSlice";
import sliderReducer from "./slider/sliderSlice";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
export const store = configureStore({
  reducer: {
    auth: atheReducer,
    slider: sliderReducer,
    category: categoryReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
