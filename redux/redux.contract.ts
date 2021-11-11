import { createSlice } from '@reduxjs/toolkit';

export interface FlairOwnership {
  id: number | null;
  owner: string | null;
}

export const initialState = {
  contract: null as any,
  fusionContract: null as any,
  activeNft: null as FlairOwnership | null,
  ownership: [] as FlairOwnership[],
}

export const contractSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setContract(state, action) {
        state.contract = action.payload ?? null;
    },
    setFusionContract(state, action) {
      state.fusionContract = action.payload ?? null;
    },
    setActiveNft(state, action) {
      state.activeNft = action.payload ?? { id: null, owner: null };
    },
    setOwnership(state, action) {
      state.ownership = action.payload ?? [];
    }
  }
});

export const { setContract, setFusionContract, setActiveNft, setOwnership } = contractSlice.actions;