import axiosInstance from '@/api/axiosInstance'
import type { IContinentDataInfo, ICountryDataInfo } from '@/api/types';

const PIXABAY_BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
// https://pixabay.com/api/?key=44477058-f3986b04decd5b71f86be7f75&q=Argentina%National%Flag&image_type=vector&per_page=3

const imageCache: { [key: string]: string } = {};

const fetchImage = async (name: string, area: string, keyword:string): Promise<string> => {

  if (imageCache[name]) {
    return imageCache[name];
  }

  const fullUrl = `${PIXABAY_BASE_URL}?key=${PIXABAY_API_KEY}` 
                + `&q=${area + '+' + name+ '+' + keyword}`
                + '&image_type=photo'
                + '&orientation=horizontal'
                + '&category=places'
                + '&per_page=3'

  console.log('fullUrl:', fullUrl);
  try {
    const response = await axiosInstance.get(fullUrl);
    const images = response.data.hits;
    const imageUrl = images.length > 0 ? images[0].webformatURL : '';

    imageCache[name] = imageUrl;

    return imageUrl;
  } catch (err) {
    console.error('Error fetching country image:', err);
    return '';
  }
};

const imageFlagCache: { [key: string]: string } = {};


const fetchCountryFlagImage = async (countryName: string): Promise<string> => {

  if (imageFlagCache[countryName]) {
    return imageFlagCache[countryName];
  }

  const fullUrl = `${PIXABAY_BASE_URL}?key=${PIXABAY_API_KEY}` 
                + `&q=${encodeURIComponent(countryName + ' National ' + ' Flag')}`
                + '&image_type=vector'
                + '&per_page=3'


  try {
    const response = await axiosInstance.get(fullUrl);
    const images = response.data.hits;
    const imageUrl = images.length > 0 ? images[0].webformatURL : '';

    imageFlagCache[countryName] = imageUrl;

    return imageUrl;
  } catch (err) {
    console.error('Error fetching country image:', err);
    return '';
  }
};

export const fetchCountryImages = async (countries: ICountryDataInfo[]): Promise<ICountryDataInfo[]> => {
  return Promise.all(
    countries.map(async (country: ICountryDataInfo) => {
      const image = await fetchImage(country.name, 'Country', 'city');
      const imageFlag = await fetchCountryFlagImage(country.name);
      return {
        ...country,
        flagImage: imageFlag,
        image,
      };
    })
  );
};

export const fetchContinentImages = async (continents: IContinentDataInfo[]): Promise<IContinentDataInfo[]> => {
  return Promise.all(
    continents.map(async (continent: IContinentDataInfo) => {
      // const image = await fetchImage(continent.name, 'Blue+Map');
      return {
        ...continent,
        image: 'assets/' + continent.name + '.png',
      };
    })
  );
};
