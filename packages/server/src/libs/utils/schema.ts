import { z } from '@hono/zod-openapi';

export const SuccessResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    __typename__: z.literal('SuccessResponse'),
  });

export const ErrorResponseSchema = z.object({
  message: z.string(),
  reasonCode: z.string().optional(),
  __typename__: z.literal('ErrorResponse'),
});
