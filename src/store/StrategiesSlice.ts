import { createSlice } from '@reduxjs/toolkit';

import { IStrategies } from '../api/strategy-api';

import {
  addStrategyTC,
  fetchStrategies,
  removeStrategyTC,
} from './meddleware/strategyMiddleware';

interface ILayoutState {
  strategies: IStrategies;
}

const initialState: ILayoutState = {
  strategies: {} as IStrategies,
};

export const StrategiesSlice = createSlice({
  name: 'strategies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchStrategies.fulfilled, (state, action) => {
      state.strategies = action.payload;
    });
    builder.addCase(addStrategyTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.strategies.strategies.unshift(action.payload);
      }
    });
    builder.addCase(removeStrategyTC.fulfilled, (state, action) => {
      const index = state.strategies.strategies.findIndex(
        ent => ent.id === action.payload,
      );
      if (index > -1) {
        state.strategies.strategies.splice(index, 1);
      }
    });
  },
});

export const strategiesReducer = StrategiesSlice.reducer;
