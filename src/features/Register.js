import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  zipCode: '',
  city: '',
  country: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateRegisterData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetRegisterData: () => {
      return initialState;
    },
  },
});

export const { updateRegisterData, resetRegisterData } = registerSlice.actions;

export default registerSlice.reducer;
