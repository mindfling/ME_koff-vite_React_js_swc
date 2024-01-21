// получаем токен ключ доступа из хранилища и из сервера
// ** authorisation Slice
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const STORAGE_KEY = 'accessToken';
const API_KEY = 'https://koff-api.vercel.app/api/users/accessKey';

// получаем ключ для авторизации от сервера
export const fetchAccessToken = createAsyncThunk(
  'auth/fetchAccessToken',
  async () => {
    const response = await fetch(API_KEY);
    
    if (!response.ok) {
      throw new Error('Не удалось получить ключ доступа');
    }
    
    const data = await response.json();
    console.log('Получили от сервера data: ', data);
    return data.accessKey; // то что получили от сервера
  },
);


// слайс данных авторизации
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem(STORAGE_KEY) || null,
    loading: false,
    error: null,
  },
  reducers: {
    removeToken(state) {
      state.accessToken = null;
      localStorage.removeItem(STORAGE_KEY);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        // загрузка
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        // успешное завершение
        state.accessToken = action.payload;
        localStorage.setItem(STORAGE_KEY, action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        // завершилось ошибкой
        state.loading = false;
        state.error = action.error.message;
      })
  },
})


export const { removeToken } = authSlice.actions;
export default authSlice.reducer;
