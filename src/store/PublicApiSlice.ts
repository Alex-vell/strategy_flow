import { createSlice } from '@reduxjs/toolkit';

import { IEntries } from '../api/public-api';

import { appSlice } from './AppSlice';
import {
  addStrategyTC,
  fetchPublicAPI,
  removeStrategyTC,
} from './meddleware/layoutMiddleware';

interface ILayoutState {
  entries: IEntries;
}

const initialState: ILayoutState = {
  entries: {} as IEntries,
};

export const publicApiSlice = createSlice({
  name: 'publicApi',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPublicAPI.fulfilled, (state, action) => {
      state.entries = action.payload;
    });
    builder.addCase(addStrategyTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.entries.entries.unshift(action.payload);
      }
    });
    builder.addCase(removeStrategyTC.fulfilled, (state, action) => {
      const index = state.entries.entries.findIndex(ent => ent.API === action.payload);
      if (index > -1) {
        state.entries.entries.splice(index, 1);
      }
    });
  },
});

export const publicApiReducer = publicApiSlice.reducer;
export const { setAppErrorAC, setLoadingStatusAC } = appSlice.actions;
