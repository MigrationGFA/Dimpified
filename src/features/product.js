import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  subCategory: "",
  header: "",
  description: "",
  currency: "",
  backgroundCover: [],
  products: [],
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
    addProduct(state, action) {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
    updateProduct(state, action) {
      const updatedProducts = state.products.map((product, index) =>
        index === action.payload.index ? action.payload.product : product
      );
      return {
        ...state,
        products: updatedProducts,
      };
    },
    deleteProduct(state, action) {
      const filteredProducts = state.products.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        products: filteredProducts,
      };
    },
  },
});

export const {
  updateProductData,
  resetProductData,
  addBackgroundCover,
  removeBackgroundCover,
  addProduct,
  updateProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
