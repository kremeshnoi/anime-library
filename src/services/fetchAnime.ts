import jikanjs from "../../node_modules/jikanjs/lib/jikan.js";

import { SearchResponse } from "@/interfaces/search.ts";

const fetchAnime = async (query: string) => {
  try {
    const response: SearchResponse = await jikanjs.search("anime", query);
    return response.results
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchAnime };
