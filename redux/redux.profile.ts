import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  accounts: [] as string[],
  dankflair: [] as any[],
  dankfusion: [] as any[],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAccounts(state, action) {
      state.accounts = action.payload ?? [];
    },
    setDankflair(state, action) {
      state.dankflair = action.payload ?? [];
    },
    setDankfusion(state, action) {
      state.dankfusion = action.payload ?? [];
    }
  }
});

export const { setAccounts, setDankflair, setDankfusion } = profileSlice.actions;