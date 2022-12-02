/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const archiveRequestsSlice = createSlice({
  name: 'archiveRequests',
  initialState: {
    list: []
  },
  reducers: {
    addRequest(state, action) {
      const d = new Date();
      const date = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`;
      state.list = [...state.list, { ...action.payload, timestamp: date }];
    }
  }
});

export default archiveRequestsSlice.reducer;
export const { addRequest } = archiveRequestsSlice.actions;
