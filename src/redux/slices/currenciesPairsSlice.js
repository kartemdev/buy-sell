import { createSlice } from '@reduxjs/toolkit';

const currenciesPairsSlice = createSlice({
  name: 'currenciesPairs',
  initialState: {
    list: [
      {
        name: 'USD/CAD_TOM',
        sidePriceBuy: 1.5766,
        sidePriceSell: 1.5745,
      },
      {
        name: 'USD/RUB_TOM',
        sidePriceBuy: 75.53,
        sidePriceSell: 74.52,
      },
    ]
  },
  reducers: {
  }
});

export default currenciesPairsSlice.reducer;
