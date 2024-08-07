import apolloClient from '@/api/graphql/apollo/apolloClient';
import { GET_COUNTRIES, GET_COUNTRY_DATA } from '@/api/graphql/queries';
import { fetchCountryImages } from './pixabayService';
import { type ICountryDataInfo } from '@/api/types';

const countriesCache: { [key: string]: ICountryDataInfo[] } = {};
const countryCache: { [key: string]: ICountryDataInfo } = {};



export const fetchCountries = async ( 
  page: number, 
  itemsPerPage: number, 
  {continent = '', name=''}: {continent: string, name: string,} 
): Promise<ICountryDataInfo[]> => {
  const cacheKey = `${name}-${page}-${itemsPerPage}-${continent}`;
  if (countriesCache[cacheKey]) {
    return countriesCache[cacheKey];
  }

  try {
    const { data } = await apolloClient.query({
      query: GET_COUNTRIES,
      variables: { name: name, continent: continent }
    });

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const countriesPage = data.countries.slice(startIndex, endIndex);

    const countriesWithImages = await fetchCountryImages(countriesPage);
    countriesCache[cacheKey] = countriesWithImages;
    return countriesWithImages;
  } catch (err) {
    console.error('Error fetching countries:', err);
    throw err;
  }
};

export const fetchCountry = async (code: string): Promise<ICountryDataInfo> => {
  if (countryCache[code]) {
    return countryCache[code];
  }

  try {
    const { data } = await apolloClient.query({
      query: GET_COUNTRY_DATA,
      variables: { code: code }
    });

    const countryWithImages = await fetchCountryImages([data.country]);
    const country = countryWithImages[0];
    countryCache[code] = country;
    return country;
  } catch (err) {
    console.error('Error fetching country:', err);
    throw err;
  }
};