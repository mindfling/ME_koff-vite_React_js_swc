import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_CAT } from "../../const";


export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;
    const response = await fetch(API_CAT, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    
    if (!response.ok) {
      throw new Error('Не удалось получить каталог список категорий');
    }
    
    const data = await response.json();
    return data;
  }
)

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});


export default categoriesSlice.reducer; //  *categoriesReducer
