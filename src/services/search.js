import jikanjs from "../../node_modules/jikanjs/lib/jikan.js"

const fetchAnime = async (query) => {
  try {
    const data = [];
    const response = await jikanjs.search('anime', query);
    console.log(response.results)
    response.results.forEach(element => {
      data.push(element)
    })
    return data;
  } catch (error) {
    throw new Error(error)
  }
}

const Search = {
  fetchAnime
}

export {Search}
