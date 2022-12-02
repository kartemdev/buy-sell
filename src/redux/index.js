import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import archiveRequestsSlice from './slices/archiveRequestsSlice';
import chosenCurrencyPairSlice from './slices/chosenCurrencyPairSlice';
import currenciesPairsSlice from './slices/currenciesPairsSlice';
import modalSlice from './slices/modalSlice';
import navbarStateSlice from './slices/navbarStateSlice';

const rootReducer = combineReducers({
  chosenCurrencyPair: chosenCurrencyPairSlice,
  currenciesPairs: currenciesPairsSlice,
  archiveRequests: archiveRequestsSlice,
  modal: modalSlice,
  navabrState: navbarStateSlice
});

export const store = configureStore({
  reducer: rootReducer
});
