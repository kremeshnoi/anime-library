import jikanjs from "../../node_modules/jikanjs/lib/jikan.js"

const getAnime = async (query) => {
  try {
    const data = [];
    const response = await jikanjs.search('anime', query);
    console.log(response.results)
    response.results.forEach(element => {
      data.push(element.image_url)
    })
    return data;
  } catch (error) {
    throw new Error(error)
  }
}

const ApiService = {
  getAnime
}

export {ApiService}
