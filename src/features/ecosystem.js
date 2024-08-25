import { createSlice } from '@reduxjs/toolkit';

// Define an initial state
const initialState = {
  creatorId: null,
  ecosystemName: '',
  ecosystemDomain: '',
  targetAudienceSector: '',
  mainObjective: '',
  ecosystemDescription: '',
  contact: '',
  address: '',
  socialMedia: [],
  ecosystemId: 'null',
};

const ecosystemSlice = createSlice({
  name: 'ecosystem',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setCreatorId: (state, action) => {
      state.creatorId = action.payload;
    },
    setEcosystemId: (state, action) => {
      state.ecosystemId = action.payload;
    },
    updateSocialMedia: (state, action) => {
      state.socialMedia = action.payload;
    },
    resetState: () => initialState,
  },
});

export const { updateField, setCreatorId, setEcosystemId, resetState, updateSocialMedia: updateSocialMedia } = ecosystemSlice.actions;

export default ecosystemSlice.reducer;

