import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACCESSKEY, STORAGE_KEY } from "../../const";


// получаем ключ для авторизации от сервера
export const fetchAccessToken = createAsyncThunk(
  'auth/fetchAccessToken',
  async () => {
    const response = await fetch(API_ACCESSKEY);

    if (!response.ok) {
      throw new Error('Не удалось получить ключ доступа');
    }

    const data = await response.json();
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
        console.error('Загрузка с ошибкой :', state.error);
      })
  },
})


// export const {removeToken} = authSlice.actions; //? Maks
export const removeToken = authSlice.actions.removeToken;
export default authSlice.reducer;
