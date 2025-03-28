import authRepository from '@/apis/auth';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface UseUserReturn {
  isLoggedIn: boolean;
  login: (code: string) => Promise<boolean>;
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
    },
    onError: (error) => {
      console.error('Login failed:', error);
      setIsLoggedIn(false);
      push('/');
    },
  });

  const login = async (code: string): Promise<boolean> => {
    // pass the kakao code to request an access code in the server
    await loginMutation.mutateAsync({ code });
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem(tokenName);
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
}
