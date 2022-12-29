import { createAsyncThunk } from '@reduxjs/toolkit';

import { IEntryItem, publicApi } from '../../api/public-api';

export const fetchPublicAPI = createAsyncThunk(
  'publicApi/fetchPublicAPI',
  async (_, thunkAPI) => {
    try {
      const res = await publicApi.getPublicApi();
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const removeStrategyTC = createAsyncThunk(
  'publicApi/removeStrategyTC',
  async (strategyId: string, thunkAPI) => {
    try {
      return strategyId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const addStrategyTC = createAsyncThunk(
  'publicApi/addStrategyTC',
  async (strategy: IEntryItem, thunkAPI) => {
    try {
      return strategy;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
