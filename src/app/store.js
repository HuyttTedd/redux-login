import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from "../reducers/userReducer"
import thunkMiddleware from 'redux-thunk'


export const store = configureStore({
  reducer: {
    countera: counterReducer,
    userState: userReducer
  },
  middleware: [thunkMiddleware]
});
