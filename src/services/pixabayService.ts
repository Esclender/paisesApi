import axiosInstance from '@/api/axiosInstance'

const PIXABAY_BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
// https://pixabay.com/api/?key=44477058-f3986b04decd5b71f86be7f75&q=Argentina%National%Flag&image_type=vector&per_page=3

const imageCache: { [key: string]: string } = {};

export const fetchCountryImage = async (countryName: string, capital: string): Promise<string> => {

  if (imageCache[countryName]) {
    return imageCache[countryName];
  }

  const fullUrl = `${PIXABAY_BASE_URL}?key=${PIXABAY_API_KEY}` 
                + `&q=${encodeURIComponent(countryName + ' Country')}`
                + '&image_type=photo'
                + '&orientation=horizontal'
                + '&category=places'
                + '&per_page=3'


  try {
    const response = await axiosInstance.get(fullUrl);
    const images = response.data.hits;
    const imageUrl = images.length > 0 ? images[0].webformatURL : '';

    imageCache[countryName] = imageUrl;

    return imageUrl;
  } catch (err) {
    console.error('Error fetching country image:', err);
    return '';
  }
};

const imageFlagCache: { [key: string]: string } = {};


export const fetchCountryFlagImage = async (countryName: string, capital: string): Promise<string> => {

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

