import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import chosenCurrencyPairSlice from './slices/chosenCurrencyPairSlice';
import currenciesPairsSlice from './slices/currenciesPairsSlice';
import modalSlice from './slices/modalSlice';

const rootReducer = combineReducers({
  chosenCurrencyPair: chosenCurrencyPairSlice,
  currenciesPairs: currenciesPairsSlice,
  modal: modalSlice,
});

export const store = configureStore({
  reducer: rootReducer
});
