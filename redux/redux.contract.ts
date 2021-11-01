import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  contract: null as any,
}

export const contractSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setContract(state, action) {
        state.contract = action.payload ?? null;
    },
  }
});

export const { setContract } = contractSlice.actions;