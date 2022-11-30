/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const chosenCurrencyPairSlice = createSlice({
  name: 'chosenCurrencyPair',
  initialState: {
    chosenPair: {
      name: '',
      sidePriceBuy: '',
      sidePriceSell: '',
    }
  },
  reducers: {
    setCurrencyPair(state, action) {
      state.chosenPair.name = action.payload.name;
      state.chosenPair.sidePriceBuy = action.payload.sidePriceBuy;
      state.chosenPair.sidePriceSell = action.payload.sidePriceSell;
    },
  }
});

export default chosenCurrencyPairSlice.reducer;
export const { setCurrencyPair } = chosenCurrencyPairSlice.actions;
