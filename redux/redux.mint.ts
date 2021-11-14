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
    mintWidth: null,
    mintHeight: null,
    mintX: null,
    mintY: null,
    mintBorder: '',
    mintClip: 0,
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
    setMintWidth(state, action) {
        state.mintWidth = action.payload ?? null;
    },
    setMintHeight(state, action) {
        state.mintHeight = action.payload ?? null;
    },
    setMintX(state, action) {
        state.mintX = action.payload ?? null;
    },
    setMintY(state, action) {
        state.mintY = action.payload ?? null;
    },
    setMintBorder(state, action) {
        state.mintBorder = action.payload ?? '';
    },
    setMintClip(state, action) {
        state.mintClip = action.payload ?? 0;
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
            mintWidth: null,
            mintHeight: null,
            mintX: null,
            mintY: null,
            mintBorder: '',
            mintClip: 0,
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
    setMintWidth,
    setMintHeight,
    setMintX,
    setMintY,
    setMintBorder,
    setMintClip,
    setMintError,
    resetForm,
} = mintSlice.actions;