import axiosInstance from '@/api/axiosInstance'

const PIXABAY_BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;


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
