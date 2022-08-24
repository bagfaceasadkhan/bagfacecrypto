import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
  currency: "USD",
  symbol: "$",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.value = action.payload;
    },
    updateCurrency: (state, action) => {
      state.currency = action.payload;
    },
    updateSymbol: (state, action) => {
      state.symbol = action.payload;
    },
  },
});

export const { updateSearch, updateCurrency, updateSymbol } =
  searchSlice.actions;
export default searchSlice.reducer;
