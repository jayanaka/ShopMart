import axios, {AxiosRequestConfig} from 'axios';
import * as Constants from '../common/Constants';

export interface ErrorResponse {
  status: boolean;
  statusCode: number;
  type: string;
  title: string;
  message: string;
  data: any;
}

export const API: any = axios.create({
  baseURL: Constants.BASE_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

API.interceptors.request.use(
  function (error: any) {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    const errorResponse: ErrorResponse = {
      status: error?.response?.data?.status || false,
      statusCode: error?.response?.data?.statusCode
        ? error?.response?.data?.statusCode
        : error?.response?.status || 500,
      type: Constants.ERROR,
      title: 'Internal Error',
      message:
        error?.response?.data?.message || 'Something went wrong please try again later',
      data: null,
    };
    return Promise.reject(errorResponse);
  },
);
