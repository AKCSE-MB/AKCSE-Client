import { useState, useEffect, useCallback } from 'react';
import authRepository from '@/apis/auth';
import { useRouter } from 'next/navigation';

interface UseUserReturn {
  isLoggedIn: boolean;
  login: (identification: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const useUser = (): UseUserReturn => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { push } = useRouter();
  const tokenName = 'masterToken';

  useEffect(() => {
    const token = localStorage.getItem(tokenName);
    setIsLoggedIn(!!token);
  }, [[isLoggedIn]]);

  const login = useCallback(
    async (identification: string, password: string): Promise<boolean> => {
      try {
        const response = await authRepository().postLogin({
          identification,
          password,
        });
        const token = response?.accessToken;

        localStorage.setItem(tokenName, token);
        setIsLoggedIn(true);

        return true;
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    },
    [],
  );

  const logout = useCallback(() => {
    localStorage.removeItem(tokenName);
    setIsLoggedIn(false);
    push('/login');
  }, [push]);

  return { isLoggedIn, login, logout };
};

export default useUser;
