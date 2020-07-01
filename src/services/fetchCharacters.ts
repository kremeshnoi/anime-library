import jikanjs from "../../node_modules/jikanjs/lib/jikan.js"

const fetchCharacters = async (type: string, page: number) => {
	try {
		const data: Array<object> = [];
		const response = await jikanjs.loadTop(type, page);
		response.top.forEach((element: any) => {
			return data.push(element)
		})
		return data;
	}  catch (error) {
		throw new Error(error)
	}
}

const FetchCharacters = {
	fetchCharacters
}

export { FetchCharacters }
