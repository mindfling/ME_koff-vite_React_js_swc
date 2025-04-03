import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../const';

const API_PROD = `${API_URL}/api/products`; // todo

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (id = 7, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;
    console.log('token для товара: ', token);
    console.log('id для товара: ', id);
    const response = await fetch(`${API_PROD}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // if error
    if (!response.ok) {
      // if (response.status === 401) {
      //   console.log('one product Slice response status was 401');
      //   return thunkAPI.rejectWithValue({
      //     status: response.status, // will payload
      //     error: 'Не удалось получить товар one product',
      //   });
      // }
      throw new Error('Не удалось получить ТОВАР');
    }

    // if success
    const data = await response.json();
    console.log('data для продукта: ', data, data.name, data.id);
    return data;
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer; // *productReducer
