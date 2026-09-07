import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpClient {
  public client: AxiosInstance;
  private requestInterceptorId!: number;
  private responseInterceptorId!: number;

  constructor() {
    this.client = axios.create(this.axiosConfig());
  }

  axiosConfig() {
    return {
      headers: {},
    };
  }

  responseBody(response: AxiosResponse) {
    return response.data;
  }

  async get<R>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<R>(url, config).then(this.responseBody);
  }

  async post<R, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.client.post<R>(url, data, config).then(this.responseBody);
  }

  async put<R, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.client.put<R>(url, data, config).then(this.responseBody);
  }

  async delete<R>(url: string, config?: AxiosRequestConfig) {
    return this.client.delete<R>(url, config).then(this.responseBody);
  }

  removeInterceptors() {
    this.client.interceptors.request.eject(this.requestInterceptorId);
    this.client.interceptors.response.eject(this.responseInterceptorId);
  }
}

export default new HttpClient();
