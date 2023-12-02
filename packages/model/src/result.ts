/* eslint-disable @typescript-eslint/no-explicit-any */

export type AppResponse<T = any> = SuccessResponse<T> | ErrorResponse;

export const AppResponse = {
  success<T>(data: T): SuccessResponse<T> {
    return { data, __typename__: 'SuccessResponse' };
  },
  failure(message: string, reasonCode?: string): ErrorResponse {
    return { message, reasonCode, __typename__: 'ErrorResponse' };
  },
} as const;

export type SuccessResponse<T = any> = {
  __typename__: 'SuccessResponse';
  data: T;
};

export type ErrorResponse = {
  __typename__: 'ErrorResponse';
  message: string;
  reasonCode?: string;
};

export const isSuccessResponse = (response: unknown): response is SuccessResponse => {
  return (
    typeof response === 'object' &&
    response !== null &&
    '__typename__' in response &&
    response['__typename__'] === 'SuccessResponse'
  );
};

export const isErrorResponse = (response: unknown): response is ErrorResponse => {
  return (
    typeof response === 'object' &&
    response !== null &&
    '__typename__' in response &&
    response['__typename__'] === 'ErrorResponse'
  );
};
