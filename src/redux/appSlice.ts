import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppModal, CartItem, Product} from './appModal';

const initialState: AppModal = {
  loading: 0,
  products: [],
  selectedProduct: null,
  cart: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitializeApp: state => {
      state.loading = 0;
      state.products = [];
      state.selectedProduct = null;
      state.cart = [];
    },
    setIsLoading: (state, {payload}: PayloadAction<number>) => {
      state.loading = payload;
    },
    setProducts: (state, {payload}: PayloadAction<Product[]>) => {
      state.products = payload;
    },
    setSelectedProduct: (state, {payload}: PayloadAction<Product | null>) => {
      state.selectedProduct = payload;
    },
    addProductToCart: (state, {payload}: PayloadAction<CartItem>) => {
      const objIndex = state.cart.findIndex(obj => {
        return obj.id === payload.id && obj.size === payload.size;
      });
      if (objIndex >= 0) {
        let items = [...state.cart];
        items[objIndex].qty = items[objIndex].qty + payload.qty;
        state.cart = items;
      } else {
        state.cart.push(payload);
      }
    },
    removeCartItem: (state, {payload}: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter(
        item => !(item.id === payload.id && item.size === payload.size),
      );
    },
  },
});

export const {
  setInitializeApp,
  setIsLoading,
  setProducts,
  setSelectedProduct,
  addProductToCart,
  removeCartItem,
} = appSlice.actions;

export default appSlice.reducer;
