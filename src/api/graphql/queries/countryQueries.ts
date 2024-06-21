import { gql } from '@apollo/client/core';

export const GET_COUNTRIES = gql`
  query ($name: String!) {
    countries(filter: { name: {regex: $name }}) {
      name
        capital
        code
        currencies
        phones
        continent {
          name
        }
        languages {
            name
        }
        states {
          name
        }
    }
  }
`;

export const GET_COUNTRY_DATA = gql`
  query ($code: ID!) {
    country(code: $code) {
        name
        capital
        code
        currencies
        phones
        continent {
          name
        }
        languages {
            name
        }
        states {
          name
        }
    }
  }
`;




