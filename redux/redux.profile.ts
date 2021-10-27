import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  account: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAccount(state, action) {
      state.account = action.payload ?? '';
    },
  }
});

export const { setAccount } = profileSlice.actions;