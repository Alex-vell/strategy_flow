import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPublicApis, IStrategies, IStrategy } from '../../../api/strategy-api';
import {
  addApiTC,
  addStrategyTC,
  fetchStrategies,
  removeApiTC,
  removeStrategyTC,
} from '../../meddleware/strategyMiddleware';

import { defaultValueStrategy } from './index';

interface ILayoutState {
  strategies: IStrategies;
  publicApis: IPublicApis;
  selectedStrategy: IStrategy | null;
  isCreatedStrategy: boolean;
}

const initialState: ILayoutState = {
  strategies: defaultValueStrategy as IStrategies,
  publicApis: {} as IPublicApis,
  selectedStrategy: null,
  isCreatedStrategy: false,
};

export const StrategiesSlice = createSlice({
  name: 'strategies',
  initialState,
  reducers: {
    setSelectedStrategyAC(state, action: PayloadAction<IStrategy | null>) {
      state.selectedStrategy = action.payload;
    },
    setIsCreatedStrategyAC(state, action: PayloadAction<{ status: boolean }>) {
      state.isCreatedStrategy = action.payload.status;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchStrategies.fulfilled, (state, action) => {
      state.publicApis.entries = action.payload.entries;
    });
    builder.addCase(fetchStrategies.rejected, state => {
      state.strategies = defaultValueStrategy;
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
export const { setSelectedStrategyAC, setIsCreatedStrategyAC } = StrategiesSlice.actions;
