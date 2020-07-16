interface SearchResponse {
	request_hash: string;
	request_cached: boolean;
	request_cache_expiry: number;
	last_page: number;
	results: SearchResult[];
}

interface SearchResult {
	mal_id: number;
	url: string;
	image_url: string;
	title: string;
	type: string;
	episodes?: number;
	airing: boolean;
	rating: string;
	score: number;
	members: number;
	synopsis: string;
	end_date?: string;
	rated: string;
}

export {SearchResponse, SearchResult};
