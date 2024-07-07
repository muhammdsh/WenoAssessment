import { gql } from "@urql/core";
export const authMutations = {
  login: gql`
    mutation customerAccessTokenCreate(
      $input: CustomerAccessTokenCreateInput!
    ) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
        }
        customerUserErrors {
          message
        }
      }
    }
  `,
  signup: gql`
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          firstName
          lastName
          email
          phone
          acceptsMarketing
        }
        customerUserErrors {
          field
          message
          code
        }
      }
    }
  `,
};

export const authQueries = {
  me: gql`
    query customer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }
  `,
};
