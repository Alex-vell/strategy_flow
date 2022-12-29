import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  error: string | null;
  isLoading: boolean;
}

const initialState: AppState = {
  error: null,
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
      state.error = action.payload.error;
    },
    setLoadingStatusAC(state, action: PayloadAction<{ status: boolean }>) {
      state.isLoading = action.payload.status;
    },
  },
  // extraReducers: builder => {},
});

export const appReducer = appSlice.reducer;
export const { setAppErrorAC, setLoadingStatusAC } = appSlice.actions;
