import jikanjs from "../../node_modules/jikanjs/lib/jikan.js";

const fetchTopList = async (type: string, page: number, subtype?: string) => {
  try {
    const response = await jikanjs.loadTop(type, page, subtype);
    return response.top
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchTopList };
