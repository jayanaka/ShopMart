import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppModal, Product } from "./appModal";

const initialState: AppModal = {
  loading: 0,
  products: [],
  selectedProduct: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitializeApp: (state) => {
      state.loading = 0;
      state.products = [];
      state.selectedProduct = null;
    },
    setIsLoading: (state, { payload }: PayloadAction<number>) => {
      state.loading = payload;
    },
    setProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload;
    },
    setSelectedProduct: (state, { payload }: PayloadAction<Product | null>) => {
      state.selectedProduct = payload;
    },
  },
});

export const {
  setInitializeApp,
  setIsLoading,
  setProducts,
  setSelectedProduct,
} = appSlice.actions;

export default appSlice.reducer;
