import apolloClient from "@/api/graphql/apollo/apolloClient";

import { GET_CONTINENTS } from "@/api/graphql/queries";
import type { ContinentsData } from "@/api/types";
import { fetchContinentImages } from "./pixabayService";

const continentsCache: { [key: string]: ContinentsData } = {};



export const fetchContinents = async (): Promise<ContinentsData> => {
  if (continentsCache["continents"]) {
    return continentsCache["continents"];
  }

  try {
    const { data } = await apolloClient.query({
      query: GET_CONTINENTS
    });

    continentsCache["continents"] = data;
    return {
      continents: await fetchContinentImages(data.continents)
    }
  } catch (error: any) {
    throw new Error("Failed to fetch continents: " + error.message);
  }
};