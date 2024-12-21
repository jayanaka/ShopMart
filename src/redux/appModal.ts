export interface AppModal {
  loading: number; // default = 0, loading = 1, refresh = 2
  products: Product[];
  selectedProduct: Product | null;
}

export interface Product {
  id: string;
  SKU: string;
  name: string;
  brandName: string;
  mainImage: string;
  price: ProductPrice | null;
  sizes: string[];
  stockStatus: boolean;
  colour: string;
  description: string;
}

export interface ProductPrice {
  amount: string;
  currency: string;
}

// {
//   "id": "9",
//   "SKU": "1011",
//   "name": "Nike Air Max Plus",
//   "brandName": "Nike",
//   "mainImage": "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/f97b0cb2546e4a53af4739505f093089_1.jpg",
//   "price": {
//       "amount": "75.00",
//       "currency": "GBP"
//   },
//   "sizes": [
//       "8",
//       "9",
//       "10",
//       "11"
//   ],
//   "stockStatus": "IN STOCK",
//   "colour": "yellow",
//   "description": "In 1998, fashion and sport collided in the Nike Air Max Plus.Tuned Air® unit in the heel makes for extra comfort and cushioning with every step.Synthetic mesh upper includes patent leather accents for a comfortable, supportive fit.Rubber outsole delivers excellent traction."
// }