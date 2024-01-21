import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const API_URL = 'https://koff-api.vercel.app';
const API_PRODUCTS = `${API_URL}/api/products`;


export const fetchProducts = createAsyncThunk(
  'categories/fetchProducts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;
    const response = await fetch(API_PRODUCTS, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    
    if (!response.ok) {
      console.error('Ошибка загрузки ТОВАРОВ', response.status, response.statusText);
      throw new Error('Не удалось получить СПИСОК ТОВАРОВ');
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

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log('action.payload PRODUCTS fulfilled: ', action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});


export default productsSlice.reducer; // *productsReducer
