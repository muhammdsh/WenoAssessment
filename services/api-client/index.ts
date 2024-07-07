import {
  AnyVariables,
  Client,
  TypedDocumentNode,
  cacheExchange,
  fetchExchange,
} from "@urql/core";
import axios from "axios";

import { clientOptions } from "./options";

export interface GraphqlRequest {
  query: TypedDocumentNode<any, AnyVariables>;
  request?: any;
}

const client = axios.create({
  baseURL: clientOptions.url,
  headers: {
    ...clientOptions.headers({}),
  },
});

// export const client = new Client({
//   url: clientOptions.url,
//   exchanges: [cacheExchange, fetchExchange],
//   fetchOptions: () => {
//     return {
//       headers: { ...clientOptions.headers({}) },
//     };
//   },
// });

export function getRequest({ url, params }: { url: string; params: any }) {
  return client.get(url, { params: params });
}

// export function mutationRequest({ query, request = {} }: GraphqlRequest) {
//   return client.mutation(query, request).toPromise();
// }
