import { createSlice } from '@reduxjs/toolkit';

import { defaultValueStrategy, IPublicApis, IStrategies } from '../api/strategy-api';

import {
  addApiTC,
  addStrategyTC,
  fetchStrategies,
  removeApiTC,
  removeStrategyTC,
} from './meddleware/strategyMiddleware';

interface ILayoutState {
  strategies: IStrategies;
  publicApis: IPublicApis;
}

const initialState: ILayoutState = {
  strategies: {} as IStrategies,
  publicApis: {} as IPublicApis,
};

export const StrategiesSlice = createSlice({
  name: 'strategies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchStrategies.fulfilled, (state, action) => {
      if (action.payload.entries) {
        state.publicApis = action.payload;
      } else {
        state.strategies = defaultValueStrategy;
      }
    });
    builder.addCase(addApiTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.publicApis.entries.unshift(action.payload);
      }
    });
    builder.addCase(removeApiTC.fulfilled, (state, action) => {
      const index = state.publicApis.entries.findIndex(
        ent => ent.Link === action.payload,
      );
      if (index > -1) {
        state.publicApis.entries.splice(index, 1);
      }
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
