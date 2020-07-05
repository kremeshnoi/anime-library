import jikanjs from "../../node_modules/jikanjs/lib/jikan.js"

const fetchTopList = async (type: string, page: number, subtype?: string) => {
	try {
		const data: Array<object> = [];
		const response = await jikanjs.loadTop(type, page, subtype);
		response.top.forEach((element: any) => {
			return data.push(element)
		})
		return data;
	}  catch (error) {
		throw new Error(error)
	}
}

export { fetchTopList }
