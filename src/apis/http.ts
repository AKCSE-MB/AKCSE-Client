import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const isServer = typeof window === 'undefined';
export const API_PREFIX = '/apis';
const baseUrl = '';

const serverApiOrigin = (process.env.NEXT_PUBLIC_SERVER_URL ?? '')
  .replace(/\/?:path\*$/, '')
  .replace(/\/$/, '');

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (!isServer || !config.url?.startsWith(`${API_PREFIX}/`)) return config;

  return {
    ...config,
    url: `${serverApiOrigin}${config.url.slice(API_PREFIX.length)}`,
  };
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data && response.data.data !== undefined) {
      return { ...response, data: response.data.data };
    }

    return response;
  },
  (error) => Promise.reject(error),
);

const getRequest = async <TResponse>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<TResponse> => {
  const response: AxiosResponse<TResponse> = await axiosInstance.get(
    url,
    config,
  );
  return response.data;
};

const postRequest = async <TResponse, TRequest>(
  url: string,
  data?: TRequest,
  config?: AxiosRequestConfig,
): Promise<TResponse> => {
  const response: AxiosResponse<TResponse> = await axiosInstance.post<
    TResponse,
    AxiosResponse<TResponse>,
    TRequest
  >(url, data, config);
  return response.data;
};

const putRequest = async <TResponse, TRequest>(
  url: string,
  data?: TRequest,
  config?: AxiosRequestConfig,
): Promise<TResponse> => {
  const response: AxiosResponse<TResponse> = await axiosInstance.put<
    TResponse,
    AxiosResponse<TResponse>,
    TRequest
  >(url, data, config);
  return response.data;
};

const deleteRequest = async <TResponse>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<TResponse> => {
  const response: AxiosResponse<TResponse> = await axiosInstance.delete(
    url,
    config,
  );
  return response.data;
};

const http = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  delete: deleteRequest,
};

export default http;
