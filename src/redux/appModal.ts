export interface AppModal {
  loading: number; // default = 0, loading = 1, refresh = 2
  products: Product[];
  selectedProduct: Product | null;
  cart: CartItem[];
}

export interface Product {
  id: string;
  SKU: string;
  name: string;
  brandName: string;
  mainImage: string;
  price: ProductPrice | null;
  sizes: string[];
  stockStatus: string;
  colour: string;
  description: string;
}

export interface ProductPrice {
  amount: string;
  currency: string;
}

export interface CartItem {
  id: string;
  SKU: string;
  name: string;
  brandName: string;
  mainImage: string;
  price: ProductPrice | null;
  size: string;
  colour: string;
  qty: number;
}
