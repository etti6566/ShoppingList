import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import totalItemsReducer from './totalItemsSlice';
import categoriesReducer from './categoriesSlice'

const rootReducer = combineReducers({
  products: productsReducer,
  totalItems: totalItemsReducer,
  categories: categoriesReducer,

});

export default rootReducer;
