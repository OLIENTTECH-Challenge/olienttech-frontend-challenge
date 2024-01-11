import { APP_API_URL } from '@/libs/constants';
import { SuccessResponse } from '@olienttech/model';
import { HandleProduct } from '../model';

type SigninRequest = {
  id: string;
  password: string;
};

export const signin = async (req: SigninRequest) => {
  const { id, password } = req;

  const res = await fetch(`${APP_API_URL}/manufacturers/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      password,
    }),
  });
  if (res.ok) {
    const json = (await res.json()) as SuccessResponse<{ token: string }>;
    return json.data.token;
  } else {
    throw new Error();
  }
};

type FetchHandlingProductsRequest = {
  manufacturerId: string;
  token: string;
};

type FetchHandlingProductsResponse = HandleProduct[];

export const fetchHandlingProducts = async (
  req: FetchHandlingProductsRequest,
): Promise<FetchHandlingProductsResponse> => {
  const { manufacturerId, token } = req;

  const res = await fetch(`${APP_API_URL}/manufacturers/${manufacturerId}/handling-products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error();
  }
  const json = (await res.json()) as SuccessResponse<FetchHandlingProductsResponse>;
  return json.data;
};

type UpdateHandlingProductStockRequest = {
  manufacturerId: string;
  productId: string;
  stock: number;
  token: string;
};

export const updateHandlingProductStock = async (req: UpdateHandlingProductStockRequest) => {
  const { manufacturerId, productId, stock, token } = req;

  await fetch(`${APP_API_URL}/manufacturers/${manufacturerId}/handling-products/${productId}/stock`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      stock,
    }),
  });
};