import {ThunkAction, UnknownAction} from '@reduxjs/toolkit';
import NetInfo from '@react-native-community/netinfo';
import {RootState} from './store';
import {setIsLoading, setProducts} from './appSlice';
import productService from '../services/productService';
import {ErrorResponse} from '../networking/APIManager';
import {ERROR} from '../common/Constants';
import {Product, ProductPrice} from './appModal';

export const getProductList = (
  isRefresh: boolean,
  onError: (error: any) => void,
): ThunkAction<Promise<void>, RootState, unknown, UnknownAction> => {
  return async dispatch => {
    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        try {
          dispatch(setIsLoading(isRefresh ? 0 : 1));
          const response: any = await productService.getProducts();
          const {result, data} = response;
          if (result !== 'success') {
            const errorResponse: ErrorResponse = {
              status: false,
              statusCode: 500,
              type: ERROR,
              title: 'Internal Error',
              message: 'Something went wrong please try again later',
              data: data,
            };
            onError(errorResponse);
          } else {
            let productList: Product[] = [];
            for (let index = 0; index < data.length; index++) {
              const element = data[index];

              let sizeList: string[] = [];
              for (let index1 = 0; index1 < element.sizes.length; index1++) {
                const elementSize = element.sizes[index1];
                sizeList.push(elementSize);
              }

              const priceObj: ProductPrice = {
                amount: element.price.amount || null,
                currency: element.price.currency || null,
              };

              const productObj: Product = {
                id: element.id || null,
                SKU: element.SKU || null,
                name: element.name || null,
                brandName: element.brandName || null,
                mainImage: element.mainImage || null,
                price: priceObj,
                sizes: sizeList,
                stockStatus: element.stockStatus || null,
                colour: element.colour || null,
                description: element.description || null,
              };
              productList.push(productObj);
            }

            dispatch(setProducts(productList));
          }
        } catch (error) {
          onError(error);
        } finally {
          dispatch(setIsLoading(0));
        }
      } else {
        const errorResponse: ErrorResponse = {
          status: false,
          type: ERROR,
          statusCode: 400,
          title: 'No internet connection',
          message: 'Please check your internet connection and try again',
          data: null,
        };
        onError(errorResponse);
      }
    });
  };
};
