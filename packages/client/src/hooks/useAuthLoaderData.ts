import type { Role } from '@olienttech/model';
import { useLoaderData } from 'react-router-dom';

type AuthLoaderData = {
  id: string;
  role: Role;
  token: string;
};

export const useAuthLoaderData = () => {
  const data = useLoaderData() as AuthLoaderData;
  return data;
};
