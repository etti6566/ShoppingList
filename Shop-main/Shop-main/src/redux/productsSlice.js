import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  list: [],
  categoryCounts: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, name, category } = action.payload;
      
      const existingProduct = state.list.find(product => product.name === name && product.category === category);
      
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.list.push({ id, name, category, quantity: 1 });
      }
      
      state.categoryCounts[category] = (state.categoryCounts[category] || 0) + 1;
    },
  },
});


export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
export const fetchAddProduct= createAsyncThunk(
  'products/fetchAddProduct',
  async ({ _productname, _categoryName }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5280/api/Product/CreateProduct', {
        _productname: _productname,
        _categoryName: _categoryName
      }, );
      console.log(response.data);
    } catch (error) {
      return rejectWithValue("Failed to add product");
    }
  }
);




