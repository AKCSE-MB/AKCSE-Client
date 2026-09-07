/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from '@/apis/http';
import { MODAL_TYPES } from '@/components/Modal/GlobalModal';
import useModal from '@/components/Modal/GlobalModal/hooks/useModal';
import * as Sentry from '@sentry/nextjs';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useEffect } from 'react';

export const useAxiosInterceptor = () => {
  const { openModal, closeModal } = useModal();

  const errorTrigger = (title: string) => {
    openModal(MODAL_TYPES.dialog, {
      title,
      handleConfirm: () => closeModal(MODAL_TYPES.dialog),
      needClose: true,
    });
  };

  const requestInterceptor = axiosInstance.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => request,
    (error: any) => {
      Sentry.captureException(error);
      return Promise.reject(error);
    },
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => {
      const {
        method,
        url,
        params,
        data: requestData,
        headers,
      } = error.config ?? {};
      Sentry.setContext('API Request Detail', {
        method,
        url,
        params,
        requestData,
        headers,
      });

      if (error.response) {
        const { data, status } = error.response;
        Sentry.setContext('API Response Detail', {
          status,
          data,
        });
      }

      const statusCode =
        error.response?.data?.statusCode ?? error.response?.status;

      if (statusCode === 401) {
        return Promise.reject(error);
      }

      if (statusCode === 404) {
        errorTrigger('요청한 데이터를 찾을 수 없습니다.');
        return Promise.reject(error);
      }

      Sentry.captureException(error);
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};
