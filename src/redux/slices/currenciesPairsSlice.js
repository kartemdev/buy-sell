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
      {
        name: 'GBP/USD_SPOT',
        sidePriceBuy: 1.3695,
        sidePriceSell: 1.3689,
      },
      {
        name: 'GBP/RUB_SPOT',
        sidePriceBuy: 76.74,
        sidePriceSell: 75.89,
      },
      {
        name: 'GBP/CAD_SPOT',
        sidePriceBuy: 1.6467,
        sidePriceSell: 1.6509,
      },
    ]
  },
  reducers: {
  }
});

export default currenciesPairsSlice.reducer;
