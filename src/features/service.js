import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: "",
  subCategory: "",
  prefix: "I will",
  header: "",
  description: "",
  format: "",
  currency: "",
  serviceBackground: [],
  services: [],
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    updateServiceData(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetServiceData: () => initialState,
    addServiceBackground(state, action) {
      return {
        ...state,
        serviceBackground: [...state.serviceBackground, action.payload],
      };
    },
    removeServiceBackground(state, action) {
      const newServiceBackground = state.serviceBackground.filter((_, i) => i !== action.payload);
      return {
        ...state,
        serviceBackground: newServiceBackground,
      };
    },
    addService(state, action) {
      return {
        ...state,
        services: [...state.services, action.payload],
      };
    },
    updateService(state, action) {
      const updatedServices = state.services.map((service, index) =>
        index === action.payload.index ? action.payload.service : service
      );
      return {
        ...state,
        services: updatedServices,
      };
    },
    deleteService(state, action) {
      const filteredServices = state.services.filter((_, index) => index !== action.payload);
      return {
        ...state,
        services: filteredServices,
      };
    },
  },
});

export const {
  updateServiceData,
  resetServiceData,
  addServiceBackground,
  removeServiceBackground,
  addService,
  updateService,
  deleteService,
} = serviceSlice.actions;

export default serviceSlice.reducer;
