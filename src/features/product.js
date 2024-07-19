import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  subCategory: "",
  productName: "",
  productType: "",
  description: "",
  author: "",
  currency: "",
  backgroundCover: [],
  packAge: [], 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProductData(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetProductData() {
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
    addPackage(state, action) {
      return {
        ...state,
        packAge: [...state.packAge, action.payload],
      };
    },
    updatePackage(state, action) {
      const updatedPackAges = state.packAge.map((product, index) =>
        index === action.payload.index ? action.payload.product : product
      );
      return {
        ...state,
        packAge: updatedPackAges,
      };
    },
    deletePackage(state, action) {
      const filteredPackAges = state.packAge.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        packAge: filteredPackAges,
      };
    },
  },
});

export const {
  updateProductData,
  resetProductData,
  addBackgroundCover,
  removeBackgroundCover,
  addPackage,
  updatePackage,
  deletePackage,
} = productSlice.actions;

export default productSlice.reducer;
