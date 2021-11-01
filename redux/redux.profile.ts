import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  accounts: [] as string[],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAccounts(state, action) {
      state.accounts = action.payload ?? [];
    },
  }
});

export const { setAccounts } = profileSlice.actions;