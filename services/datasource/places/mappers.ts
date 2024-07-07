import { z } from "zod";

const geometrySchema = z.object({
  coordinates: z.array(z.number()).length(2),
  type: z.literal("Point"),
});

const propertiesSchema = z.object({
  osm_type: z.string(),
  osm_id: z.number(),
  extent: z.array(z.number()).length(4).optional(),
  country: z.string().optional().default("-"),
  osm_key: z.string(),
  city: z.string().optional().default("-"),
  countrycode: z.string().optional(),
  osm_value: z.string(),
  postcode: z.string().optional(),
  name: z.string(),
  state: z.string().optional(),
  type: z.string(),
});

export const featureSchema = z.object({
  isSelected: z.boolean().default(false),
  geometry: geometrySchema,
  type: z.literal("Feature"),
  properties: propertiesSchema,
});

export const searchPlacesSchema = z.object({
  features: z.array(featureSchema),
});
