// import axios, { AxiosRequestConfig } from 'axios';
// import { BASE_API } from '../common/Constants';

// const Api = async (config: AxiosRequestConfig<any>) => {
//   axios.interceptors.response.use(
//     response => {
//       return response;
//     },
//     function (error) {
//       if (!error.response) {
//         error.response = {
//           data: 'network error',
//           status: 500,
//         };
//       }
//       if (error.response.status === 401) {
//         console.log('Un Authorised');
//       }
//       return Promise.reject(error);
//     },
//   );
//   config.baseURL = BASE_API;
//   return axios(config);
// };

// export default Api;
