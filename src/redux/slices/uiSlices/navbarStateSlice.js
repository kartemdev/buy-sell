/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const navbarStateSlice = createSlice({
  name: 'navabrState',
  initialState: {
    state: null
  },
  reducers: {
    setNavbarState(state, action) {
      state.state = action.payload;
    }
  }
});

export default navbarStateSlice.reducer;
export const { setNavbarState } = navbarStateSlice.actions;
