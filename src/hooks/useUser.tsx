import authRepository from '@/apis/auth';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useModalStore } from '@/store/useModalStore';
import { MODAL_TYPES } from '@/components/Modal/GlobalModal';
import CAUTION from '@/assets/common/logo/caution.svg';

interface UseUserReturn {
  isLoggedIn: boolean;
  login: (code: string) => Promise<boolean>;
  logout: () => void;
}

export default function useUser(): UseUserReturn {
  const { push } = useRouter();
  const tokenName = 'token';
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { openModal, closeModal } = useModalStore();
  const loginInfoModal = (message: string) => {
    openModal(MODAL_TYPES.dialog, {
      message: message,
      logo: <CAUTION />,
      handleConfirm: () => closeModal(MODAL_TYPES.dialog),
      handleClose: () => closeModal(MODAL_TYPES.dialog),
      isLogin: false,
    });
  };

  useEffect(() => {
    const token = sessionStorage.getItem(tokenName);
    setIsLoggedIn(!!token);
  }, []);

  const loginMutation = useMutation(authRepository().postLogin, {
    onSuccess: (res) => {
      const token = res.accessToken;
      sessionStorage.setItem(tokenName, token);
      setIsLoggedIn(true);
      push('/');
    },
    onError: (error) => {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === 401) {
        const message =
          'Account successfully registered. Please wait for access approval.';
        loginInfoModal(message);
        push('/');
      } else {
        console.error('Login failed:', error);
        setIsLoggedIn(false);
        toast.error('Log In Failed, Please Try Again!');
      }
    },
  });

  const login = async (code: string): Promise<boolean> => {
    // pass the kakao code to request an access code in the server
    await loginMutation.mutateAsync({ code });
    toast.success('Log In Successful!');
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem(tokenName);
    setIsLoggedIn(false);
    toast.success('Log Out Successful!');
  };

  return { isLoggedIn, login, logout };
}
