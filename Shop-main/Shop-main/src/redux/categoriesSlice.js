import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  loading: true,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCategories,
  setLoading,
  setError,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5280/api/Category/GetAllCategories');
      dispatch(setCategories (response.data));
    } catch (error) {
      return rejectWithValue("Failed to fetch categories");
    }
  }
);
