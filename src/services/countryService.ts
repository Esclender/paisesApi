import apolloClient from '@/api/graphql/apollo/apolloClient';
import { GET_COUNTRIES, GET_COUNTRY_DATA } from '@/api/graphql/queries';
import { fetchCountryImage } from './pixabayService';
import { type ICountryDataInfo } from '@/api/types';

const fetchCountryImages = async (countries: ICountryDataInfo[]): Promise<ICountryDataInfo[]> => {
  return Promise.all(
    countries.map(async (country: ICountryDataInfo) => {
      const image = await fetchCountryImage(country.name, country.capital);
      return {
        ...country,
        image,
      };
    })
  );
};

export const fetchCountries = async (name: string, page: number, itemsPerPage: number): Promise<ICountryDataInfo[]> => {
  try {
    const { data } = await apolloClient.query({
      query: GET_COUNTRIES,
      variables: {name: name}
    });

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const countriesPage = data.countries.slice(startIndex, endIndex);

    const countriesWithImages = await fetchCountryImages(countriesPage);
    return countriesWithImages;
  } catch (err) {
    console.error('Error fetching countries:', err);
    throw err;
  }
};

export const fetchCountry = async (code: string): Promise<ICountryDataInfo> => {
  try {
    const { data } = await apolloClient.query({
      query: GET_COUNTRY_DATA,
      variables: {code: code}
    });

    console.log(data)


    const countryImage = await fetchCountryImage(data.country.name, data.country.capital);
    return {
      ...data.country,
      image: countryImage,
    };
  } catch (err) {
    console.error('Error fetching countries:', err);
    throw err;
  }
};