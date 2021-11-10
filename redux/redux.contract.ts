import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  contract: null as any,
  activeNft: {
    id: null as number | null,
    owner: null as string | null,
  },
}

export const contractSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setContract(state, action) {
        state.contract = action.payload ?? null;
    },
    setActiveNft(state, action) {
      state.activeNft = action.payload ?? { id: null, owner: null };
    },
  }
});

export const { setContract, setActiveNft } = contractSlice.actions;