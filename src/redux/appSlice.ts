import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { AppModal } from './appModal';

// Define the initial state using that type
const initialState: AppModal = {
  loading: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitializeApp: state => {
      state.loading = 0;
    },
    setIsLoading: (state, {payload}: PayloadAction<number>) => {
      state.loading = payload;
    },
  },
});

export const {
  setInitializeApp,
  setIsLoading,
} = appSlice.actions;

export default appSlice.reducer;
