import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import UserSlice from './Reducers/UserSlice';
import spendSlice from "./Reducers/SpendSlice"

const store = configureStore({
  reducer: {
    users: UserSlice,
    spend: spendSlice
  },
  
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(fn: (state: RootState) => T) => T =
  useSelector;
export type RootState = ReturnType<typeof store.getState>;

export default store;
