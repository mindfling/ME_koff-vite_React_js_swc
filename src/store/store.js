import { configureStore } from '@vitejs/plugin-react-swc';
import authReducer from './auth/authSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})
