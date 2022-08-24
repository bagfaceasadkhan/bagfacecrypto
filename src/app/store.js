import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/SearchSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
