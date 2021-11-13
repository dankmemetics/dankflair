import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    name: '',
    description: '',
    dankId: null,
    mintUrl: '',
    mintContract: '',
    mintName: '',
    mintId: null,
    mintKey: '',
    fusionX: '',
    fusionY: '',
    fusionClip: 0,
    mintError: 0,
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
        state.dankId = action.payload ?? null;
    },
    setMintUrl(state, action) {
        state.mintUrl = action.payload ?? '';
    },
    setMintContract(state, action) {
        state.mintContract = action.payload ?? '';
    },
    setMintName(state, action) {
        state.mintName = action.payload ?? '';
    },
    setMintId(state, action) {
        state.mintId = action.payload ?? null;
    },
    setMintKey(state, action) {
        state.mintKey = action.payload ?? '';
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
    setMintError(state, action) {
        state.mintError = action.payload ?? 0;
    },
    resetForm(state, action) {
        state = {
            name: '',
            description: '',
            dankId: null,
            mintUrl: '',
            mintContract: '',
            mintName: '',
            mintId: null,
            mintKey: '',
            fusionX: '',
            fusionY: '',
            fusionClip: 0,
            mintError: 0,
        };
    }
  }
});

export const { 
    setName,
    setDescription,
    setDankId,
    setMintUrl,
    setMintContract,
    setMintName,
    setMintId,
    setMintKey,
    setFusionX,
    setFusionY,
    setFusionClip,
    setMintError,
    resetForm,
} = mintSlice.actions;