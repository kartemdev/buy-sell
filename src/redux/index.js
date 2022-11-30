import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import chosenCurrencyPairSlice from './slices/chosenCurrencyPairSlice';
import currenciesPairsSlice from './slices/currenciesPairsSlice';

const rootReducer = combineReducers({
  chosenCurrencyPair: chosenCurrencyPairSlice,
  currenciesPairs: currenciesPairsSlice,
});

export const store = configureStore({
  reducer: rootReducer
});
