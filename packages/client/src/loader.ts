import * as api from '@/api';
import { Role } from '@olienttech/model';
import { type LoaderFunction, redirect } from 'react-router-dom';

export const manufacturerAuthLoader: LoaderFunction = async () => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('token'))
    ?.split('=')[1];

  if (token === undefined) {
    return redirect('/manufacturer/login');
  }

  try {
    const { id, role } = await api.verify(token);

    if (role !== Role.Manufacturer) {
      return redirect('/manufacturer/login');
    }

    return {
      id,
      role,
      token,
    };
  } catch {
    return redirect('/manufacturer/login');
  }
};
