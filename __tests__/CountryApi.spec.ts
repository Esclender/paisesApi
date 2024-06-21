import { expect, describe , beforeAll, it} from 'vitest'
import { ApolloClient, createHttpLink,  InMemoryCache, type NormalizedCacheObject } from '@apollo/client/core'
import { fetchCountries, fetchCountry, fetchCountryImage } from '@/services';

describe('Countries API', () => {
  const  httpLink = createHttpLink({
    uri: 'https://countries.trevorblades.com',
  });
  const cache = new InMemoryCache()
  let apolloClient: ApolloClient<NormalizedCacheObject>


  beforeAll(() => {
    apolloClient = new ApolloClient({
      link: httpLink,
      cache,
    })
  });

  it('GET countries: is country Array and has content', async () => {
    const data = await fetchCountries("", 1, 10)

    console.log(data)

    expect(Array.isArray(data)).toBe(true);
    expect(data?.length).toBe(10);
  });


  it('GET one country by regex', async () => {
    const data =  await fetchCountries("Uruguay", 1, 10)

    expect(data[0]).toHaveProperty("code")
    expect(data[0]).toHaveProperty("name")
    expect(data[0]).toHaveProperty("capital")
    expect(data[0]).toHaveProperty("phones")
    expect(data[0]).toHaveProperty("continent")
    expect(data[0]).toHaveProperty("languages")
    expect(data[0]).toHaveProperty("states")
    expect(data[0]).toHaveProperty("image")

    expect(data?.length).toBe(1);

  });

  it('GET country details', async () => {
    const data = await fetchCountry("UY")


    expect(data).toHaveProperty("code")
    expect(data).toHaveProperty("name")
    expect(data).toHaveProperty("capital")
    expect(data).toHaveProperty("phones")
    expect(data).toHaveProperty("continent")
    expect(data).toHaveProperty("languages")
    expect(data).toHaveProperty("states")
    expect(data).toHaveProperty("image")
  });

  it('GET images from pixabay', async () => {
    const imagesArray = await fetchCountryImage("Uruguay", "Montevideo")

    expect(imagesArray).toBeTypeOf("string")
  });

  
});