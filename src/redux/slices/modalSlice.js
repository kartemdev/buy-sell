/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'slice',
  initialState: {
    active: true,
    side: null,
  },
  reducers: {
    onOpen(state, action) {
      state.active = true;
      state.side = action.payload;
    },

    onClose(state) {
      state.active = false;
      state.side = null;
    }
  }
});

export default modalSlice.reducer;
export const { onOpen, onClose } = modalSlice.actions;
