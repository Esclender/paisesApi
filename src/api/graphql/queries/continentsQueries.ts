import { gql } from "@apollo/client/core";

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
      code
    }
  }
`;