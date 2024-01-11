import { APP_API_URL } from '@/libs/constants';
import { Role, SuccessResponse } from '@olienttech/model';

export const verify = async (token: string) => {
  const res = await fetch(`${APP_API_URL}/verify`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error();
  }

  const json = (await res.json()) as SuccessResponse<{ id: string; role: Role }>;
  return json.data;
};
