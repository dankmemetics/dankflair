import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    name: '',
    description: '',
    dankId: 0,
    mintUrl: '',
    mintContract: '',
    mintId: 0,
    fusionX: '',
    fusionY: '',
    fusionClip: 0,
}

export const mintSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName(state, action) {
        state.name = action.payload ?? '';
    },
    setDescription(state, action) {
        state.description = action.payload ?? '';
    },
    setDankId(state, action) {
        state.dankId = action.payload ?? 0;
    },
    setMintUrl(state, action) {
        state.mintUrl = action.payload ?? '';
    },
    setMintContract(state, action) {
        state.mintContract = action.payload ?? '';
    },
    setMintId(state, action) {
        state.mintId = action.payload ?? 0;
    },
    setFusionX(state, action) {
        state.fusionX = action.payload ?? '';
    },
    setFusionY(state, action) {
        state.fusionY = action.payload ?? '';
    },
    setFusionClip(state, action) {
        state.fusionClip = action.payload ?? 0;
    },
    resetForm(state, action) {
        state = initialState;
    }
  }
});

export const { 
    setName,
    setDescription,
    setDankId,
    setMintUrl,
    setMintContract,
    setMintId,
    setFusionX,
    setFusionY,
    setFusionClip,
    resetForm,
} = mintSlice.actions;