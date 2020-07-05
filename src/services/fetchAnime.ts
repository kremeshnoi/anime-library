import jikanjs from "../../node_modules/jikanjs/lib/jikan.js";

import { SearchResponse, SearchResult } from "@/interfaces/search.ts";

const fetchAnime = async (query: string) => {
  try {
    const data: SearchResult[] = [];
    const response: SearchResponse = await jikanjs.search("anime", query);
    response.results.forEach(element => {
      data.push(element);
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchAnime };
