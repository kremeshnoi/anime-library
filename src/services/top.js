import jikanjs from "../../node_modules/jikanjs/lib/jikan.js"

const fetchTop = async () => {
  try {
    const data = [];
    const response = await jikanjs.loadTop('anime');
    response.top.forEach(element => {
      data.push(element)
    })
    return data;
  } catch (error) {
    throw new Error(error)
  }
}

const Top = {
  fetchTop
}

export {Top}
