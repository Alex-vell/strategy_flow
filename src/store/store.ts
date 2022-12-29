import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from './AppSlice';
import { publicApiReducer } from './PublicApiSlice';

const rootReducer = combineReducers({
  publicApiReducer,
  appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
