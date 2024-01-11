import { Role } from '@olienttech/model';
import { createContext, useCallback, useContext, useState } from 'react';
import * as manufacturerApi from '@/api/manufacturer';

type User = {
  id: string;
  role: Role;
  token: string;
};

const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
}>({
  user: null,
  setUser: () => {
    throw new Error('not implement');
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  // 製造会社でログインする
  const signinManufacturer = useCallback(
    async (id: string, password: string) => {
      const user = await manufacturerApi.signin({ id, password });

      setUser({
        id: user.id,
        role: Role.Manufacturer,
        token: user.token,
      });

      return user;
    },
    [setUser],
  );

  return { user, signinManufacturer };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
