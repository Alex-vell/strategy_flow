import { createAsyncThunk } from '@reduxjs/toolkit';

import { defaultValueStrategy, IStrategy, strategyApi } from '../../api/strategy-api';

export const fetchStrategies = createAsyncThunk(
  'strategies/fetchStrategies',
  async (_, thunkAPI) => {
    try {
      const res = await strategyApi.getStrategies();
      return res.data;
    } catch (e) {
      // return thunkAPI.rejectWithValue(e);
      console.log(thunkAPI.rejectWithValue(e));
      return defaultValueStrategy;
    }
  },
);

export const removeStrategyTC = createAsyncThunk(
  'strategies/removeStrategyTC',
  async (strategyId: string, thunkAPI) => {
    try {
      return strategyId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const addStrategyTC = createAsyncThunk(
  'strategies/addStrategyTC',
  async (strategy: IStrategy, thunkAPI) => {
    try {
      return strategy;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
