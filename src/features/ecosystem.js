import { createSlice } from '@reduxjs/toolkit';

// Define an initial state
const initialState = {
  creatorId: null,
  ecosystemName: '',
  ecosystemDomain: '',
  targetAudienceSector: '',
  mainObjective: '',
  expectedAudienceNumber: '',
  experience: '',
  ecosystemDescription: '',
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
    }
  },
});

export const { updateField, setCreatorId, setEcosystemId } = ecosystemSlice.actions;

export default ecosystemSlice.reducer;
