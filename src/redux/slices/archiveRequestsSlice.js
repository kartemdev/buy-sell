/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const archiveRequestsSlice = createSlice({
  name: 'archiveRequests',
  initialState: {
    list: [
      {
        side: 'BUY', price: 1.5745, instrument: 'USD/CAD_TOM', volume: '20000', timestamp: '02.12.2022 18:27:52.540'
      },
      {
        side: 'SELL', price: 1.3689, instrument: 'GBP/USD_SPOT', volume: '10000', timestamp: '02.12.2022 18:28:02.406'
      },
      {
        side: 'BUY', price: 74.52, instrument: 'USD/RUB_TOM', volume: '2000000', timestamp: '02.12.2022 18:28:14.707'
      },
      {
        side: 'SELL', price: 1.5745, instrument: 'USD/CAD_TOM', volume: '2000000000', timestamp: '02.12.2022 18:28:20.977'
      },
      {
        side: 'SELL', price: 1.6509, instrument: 'GBP/CAD_SPOT', volume: '1000000', timestamp: '02.12.2022 18:28:43.26'
      },
      {
        side: 'BUY', price: 1.3689, instrument: 'GBP/USD_SPOT', volume: '300000', timestamp: '02.12.2022 18:29:00.131'
      },
      {
        side: 'BUY', price: 75.89, instrument: 'GBP/RUB_SPOT', volume: '2000000', timestamp: '02.12.2022 18:29:15.288'
      },
      {
        side: 'BUY', price: 1.6509, instrument: 'GBP/CAD_SPOT', volume: '400000000', timestamp: '02.12.2022 18:30:20.727'
      },
      {
        side: 'SELL', price: 75.89, instrument: 'GBP/RUB_SPOT', volume: '5000000000000', timestamp: '02.12.2022 18:31:05.274'
      },
      {
        side: 'SELL', price: 74.52, instrument: 'USD/RUB_TOM', volume: '700000', timestamp: '02.12.2022 18:31:50.950'
      }
    ]
  },
  reducers: {
    addRequest(state, action) {
      const d = new Date();
      const date = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}.${d.getMilliseconds()}`;
      state.list = [...state.list, { ...action.payload, timestamp: date }];
    }
  }
});

export default archiveRequestsSlice.reducer;
export const { addRequest } = archiveRequestsSlice.actions;
