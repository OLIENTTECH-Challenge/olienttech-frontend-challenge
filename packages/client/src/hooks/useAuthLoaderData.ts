import { Role } from '@olienttech/model';
import { useLoaderData } from 'react-router-dom';

type AuthLoaderData = {
  id: string;
  role: Role;
  token: string;
};

export const useAuthLoaderData = () => {
  const data = useLoaderData() as AuthLoaderData | null;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return data!;
};
