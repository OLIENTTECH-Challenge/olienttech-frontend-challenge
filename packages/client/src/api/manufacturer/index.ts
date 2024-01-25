import { APP_API_URL } from '@/libs/constants';
import { SuccessResponse } from '@olienttech/model';

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

  await new Promise((resolve) => setTimeout(resolve, 2000)); // NOTE: トーストの挙動を試すために, わざと処理待ちしている

  if (res.ok) {
    const json = (await res.json()) as SuccessResponse<{ id: string; name: string; token: string }>;

    // NOTE: トークンをCookieにセット
    document.cookie = `token=${json.data.token}; path=/`;

    return json.data;
  } else {
    throw new Error();
  }
};

type FetchManufactureRequest = {
  manufacturerId: string;
  token: string;
};

type FetchManufactureResponse = {
  id: string;
  name: string;
  description: string;
};

export const fetchManufacture = async (req: FetchManufactureRequest) => {
  const { manufacturerId, token } = req;

  const res = await fetch(`${APP_API_URL}/manufacturers/${manufacturerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error();
  }

  const json = (await res.json()) as SuccessResponse<FetchManufactureResponse>;
  return json.data;
};

type FetchHandlingProductsRequest = {
  manufacturerId: string;
  token: string;
};

type FetchHandlingProductsResponse = {
  id: string;
  name: string;
  description: string;
  categories: { id: string; name: string }[];
  price: number;
  stock: number;
}[];

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
  await new Promise((resolve) => setTimeout(resolve, 1000)); // NOTE: トーストの挙動を試すために, わざと処理待ちしている
};

type FetchOrdersRequest = {
  manufacturerId: string;
  token: string;
};

type FetchOrdersResponse = {
  id: string;
  shop: { id: string; name: string; description: string };
  approved: boolean;
  orderAt: string;
  totalPrice: number;
}[];

export const fetchOrders = async (req: FetchOrdersRequest): Promise<FetchOrdersResponse> => {
  const { manufacturerId, token } = req;

  const res = await fetch(`${APP_API_URL}/manufacturers/${manufacturerId}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error();
  }
  const json = (await res.json()) as SuccessResponse<FetchOrdersResponse>;
  return json.data;
};

type FetchOrderRequest = {
  manufacturerId: string;
  orderId: string;
  token: string;
};

type FetchOrderResponse = {
  id: string;
  shop: {
    id: string;
    name: string;
    description: string;
  };
  orderAt: string;
  approved: boolean;
  totalPrice: number;
  items: {
    product: {
      id: string;
      name: string;
      description: string;
    };
    price: number;
    stock: number;
    quantity: number;
  }[];
};

export const fetchOrder = async (req: FetchOrderRequest): Promise<FetchOrderResponse> => {
  const { manufacturerId, orderId, token } = req;

  const res = await fetch(`${APP_API_URL}/manufacturers/${manufacturerId}/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error();
  }
  const json = (await res.json()) as SuccessResponse<FetchOrderResponse>;
  return json.data;
};
