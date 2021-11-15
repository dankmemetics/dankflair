import { createSlice } from '@reduxjs/toolkit';
import { FlairOwnership } from './redux.contract';

export const initialState = {
  flairpediaInput: '',
  profileInput: '',
  accounts: [] as string[],
  dankflair: [] as FlairOwnership[],
  dankfusion: [] as any[],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setFlairpediaInput(state, action) {
      state.flairpediaInput = action.payload ?? '';
    },
    setProfileInput(state, action) {
      state.profileInput = action.payload ?? '';
    },
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

export const { setFlairpediaInput, setProfileInput, setAccounts, setDankflair, setDankfusion } = profileSlice.actions;