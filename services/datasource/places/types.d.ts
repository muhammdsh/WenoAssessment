import { z } from "zod";
import { searchPlacesSchema, featureSchema } from "./mappers";

export interface CustomerCreateInput {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  phone?: string;
  acceptsMarketing: boolean;
}

export interface SearchRequest {
  q: string;
  limit: string;
}

export type SearchModel = z.infer<typeof searchPlacesSchema>;
export type SearchItemModel = z.infer<typeof featureSchema>;
