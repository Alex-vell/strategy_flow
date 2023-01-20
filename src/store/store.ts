import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from './slice/App/AppSlice';
import { strategiesReducer } from './slice/Strategies/StrategiesSlice';

const rootReducer = combineReducers({
  strategyReducer: strategiesReducer,
  appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
