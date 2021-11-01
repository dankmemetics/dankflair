import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { profileSlice } from './redux.profile';
import { contractSlice } from './redux.contract';

export function makeStore() {
  return configureStore({
    reducer: {
      profile: profileSlice.reducer,
      contract: contractSlice.reducer,
    }
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);