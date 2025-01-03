import authRepository from '@/apis/auth';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface UseUserReturn {
  isLoggedIn: boolean;
  login: (identification: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export default function useUser(): UseUserReturn {
  const { push } = useRouter();
  const tokenName = 'token';
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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
      toast.success('Login successful');
    },
    onError: (error) => {
      console.error('Login failed:', error);
      setIsLoggedIn(false);
      toast.error('Login failed, please try again');
      return;
    },
  });

  const login = async (
    identification: string,
    password: string,
  ): Promise<boolean> => {
    await loginMutation.mutateAsync({ identification, password });
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem(tokenName);
    setIsLoggedIn(false);
    toast.info('Log out successful');
    push('/login');
  };

  return { isLoggedIn, login, logout };
}
