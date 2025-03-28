/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '@/apis/http';
import { MODAL_TYPES } from '@/components/Modal/GlobalModal';
import useModal from '@/components/Modal/GlobalModal/hooks/useModal';
import * as Sentry from '@sentry/nextjs';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import CAUTION from '@/assets/common/logo/caution.svg';

export const useAxiosInterceptor = () => {
  const { openModal, closeModal } = useModal();

  const errorTrigger = () => {
    openModal(MODAL_TYPES.dialog, {
      title: 'error occured',
      handleConfirm: () => closeModal(MODAL_TYPES.dialog),
      needClose: true,
    });
  };

  const firstLoginTrigger = () => {
    openModal(MODAL_TYPES.dialog, {
      logo: <CAUTION />,
      message:
        'Your login request has been made! Please wait for an admin to approve your access.',
      handleConfirm: () => closeModal(MODAL_TYPES.dialog),
      needClose: true,
    });
  };

  const requestInterceptor = http.client.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
      if (typeof window === undefined) return request;

      if (request.headers.Authorization?.toString().split(' ')[1] === 'null') {
        const token = (sessionStorage as Storage).getItem('token');
        request.headers.Authorization = `Bearer ${token}`;
        return { ...request };
      }

      return request;
    },
    (error: any) => {
      Sentry.captureException(error);
      return Promise.reject(error);
    },
  );

  const responseInterceptor = http.client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
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

      if (error.response.data.statusCode === 401) {
        firstLoginTrigger();
        return;
      } else if (error.response.data.statusCode === 404) {
        errorTrigger();
        return;
      }

      Sentry.captureException(error);
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      http.client.interceptors.request.eject(requestInterceptor);
      http.client.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};
