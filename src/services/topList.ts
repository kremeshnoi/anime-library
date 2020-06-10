import jikanjs from "../../node_modules/jikanjs/lib/jikan.js"

const fetchTopList = async (page: number, subtype: string) => {
	const data: Array<object> = [];
	const response = await jikanjs.loadTop("anime", page, subtype);
	console.log(response.results);
	response.top.forEach((element: any) => {
		data.push(element)
	 })
	return data;
 }

const TopList = {
	fetchTopList
 }

export { TopList }
