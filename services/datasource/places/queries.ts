import { searchPlaces } from "./calls";
import { CustomerCreateInput, SearchRequest } from "./types";

enum queryKeys {
  searchPlaces = "searchPlaces",
}

export const searchPlacesQuery = (props: SearchRequest) => ({
  queryKey: [queryKeys.searchPlaces, props.q],
  queryFn: () => searchPlaces(props),
});
