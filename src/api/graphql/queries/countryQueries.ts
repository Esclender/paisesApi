import { gql } from '@apollo/client/core';

export const GET_COUNTRIES = gql`
  query ($name: String!, $continent: String!) {
    countries(filter: { name: {regex: $name }, continent: { regex: $continent } }) {
      name
        capital
        code
        currencies
        phones
        continent {
          code
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

export const GET_COUNTRY_DATA_BY_CONTINENT = gql`
  query GetCountriesByContinent($continent: String!) {
    countries(filter: { continent: { eq: $continent } }) {
      code
      name
      image
      flagImage
      continent {
        name
      }
    }
  }
`;






