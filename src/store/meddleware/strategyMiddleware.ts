import { createAsyncThunk } from '@reduxjs/toolkit';

import { IApi, IStrategy, strategyApi } from '../../api/strategy-api';

export const fetchStrategies = createAsyncThunk(
  'strategies/fetchStrategies',
  async (_, thunkAPI) => {
    try {
      const res = await strategyApi.getStrategies();
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
      // console.log(thunkAPI.rejectWithValue(e));
      // return defaultValueStrategy;
    }
  },
);

export const removeApiTC = createAsyncThunk(
  'strategies/removeApiTC',
  async (apiLink: string, thunkAPI) => {
    try {
      return apiLink;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const addApiTC = createAsyncThunk(
  'strategies/addApiTC',
  async (api: IApi, thunkAPI) => {
    try {
      return api;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
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
