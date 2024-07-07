import { ZodSchema } from "zod";

export default function createApiResponse(schema: ZodSchema, data: any) {
  const transformedResponse = schema.parse({
    ...(data as Object),
  });

  return transformedResponse;
}
