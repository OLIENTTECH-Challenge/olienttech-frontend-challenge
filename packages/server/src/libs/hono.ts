import { OpenAPIHono } from '@hono/zod-openapi';
import { AppResponse } from '@olienttech/model';

export const createHonoApp = () => {
  return new OpenAPIHono({
    defaultHook: (result, c) => {
      if (!result.success) {
        return c.json(AppResponse.failure(result.error.message), 422);
      }
    },
  });
};
