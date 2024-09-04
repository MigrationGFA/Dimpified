import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  subCategory: "",
  prefix: "I will",
  header: "",
  description: "",
  format: "",
  currency: "",
  services: [],
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    updateServiceData(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetServiceData() {
      return initialState;
    },
    addBackgroundCover(state, action) {
        const newBackgroundCover = {
          name: action.payload.name,
          preview: action.payload.preview,
        };
        return {
          ...state,
          backgroundCover: [...state.backgroundCover, newBackgroundCover],
        };
      },
    removeBackgroundCover(state, action) {
      const newBackgroundCover = state.backgroundCover.filter(
        (_, i) => i !== action.payload
      );
      return {
        ...state,
        backgroundCover: newBackgroundCover,
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
      const filteredServices = state.services.filter(
        (_, index) => index !== action.payload
      );
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
  addBackgroundCover,
  removeBackgroundCover,
  addService,
  updateService,
  deleteService,
} = serviceSlice.actions;

export default serviceSlice.reducer;
