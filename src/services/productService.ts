import API_CONSTANT_MAP from './api_url';
import {API} from '../networking/APIManager';

const productService = {
  async getProducts() {
    const response = await API.get(API_CONSTANT_MAP.PRODUCTS);
    return response.data;
  },
};

export default productService;
