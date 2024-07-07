import { BACKEND_API, API_KEY } from "@env";

interface HeadersParams {
  acceptedLanguage?: string | undefined;
  AccessToken?: string | undefined;
}

interface Headers {
  "Content-Type": any;
  "x-api-key": any;
  "Accept-Language"?: any;
  "Access-Token"?: any;
}
export const clientOptions = {
  url: BACKEND_API,
  headers: ({ acceptedLanguage, AccessToken }: HeadersParams) => {
    var headers: Headers = {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    };
    headers["Content-Type"] = "application/json";
    if (!!acceptedLanguage) {
      headers["Accept-Language"] = acceptedLanguage;
    }
    if (!!AccessToken) {
      headers["Accept-Language"] = acceptedLanguage;
    }
    return headers;
  },
};
