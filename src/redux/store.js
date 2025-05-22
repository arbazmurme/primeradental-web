import { configureStore } from "@reduxjs/toolkit";
import atheReducer from "./auth/authSlice";
import sliderReducer from "./slider/sliderSlice";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import ServicesSlice from "./services/servicesSlice";

export const store = configureStore({
  reducer: {
    auth: atheReducer,
    slider: sliderReducer,
    category: categoryReducer,
    product: productReducer,
    services: ServicesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
