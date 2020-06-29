import jikanjs from "../../node_modules/jikanjs/lib/jikan.js"

const fetchTopList = async (type: string, page: number, subtype: string, count: number) => {
	try {
		const data: Array<object> = [];
		const response = await jikanjs.loadTop(type, page, subtype, count);
		let i:number = 0;
		response.top.forEach((element: any) => {
			if (i < count) {
				data.push(element)
				i++
			} else {
				return
			}
		})
		return data;
	}  catch (error) {
		throw new Error(error)
	}

 }

const FetchTopList = {
	fetchTopList
 }

export { FetchTopList }
