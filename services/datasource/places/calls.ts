import { SearchRequest, SearchModel } from "./types";
import createApiResponse from "@/utils/model-factory";
import { getRequest } from "@/services/api-client";
import { searchPlacesSchema } from "./mappers";

export async function searchPlaces(
  params: SearchRequest
): Promise<SearchModel> {
  const result = await getRequest({ url: "/api", params: params });

  return createApiResponse(searchPlacesSchema, result.data);
}
