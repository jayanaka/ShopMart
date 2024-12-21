import {Platform} from 'react-native';
import API_CONSTANT_MAP from './api_url';
import * as Constants from '../common/Constants';
import { API } from '../networking/APIManager';

const productService = {
  async init() {
    const response = await API.get(API_CONSTANT_MAP.INIT);
    return response.data;
  },
};

export default productService;
