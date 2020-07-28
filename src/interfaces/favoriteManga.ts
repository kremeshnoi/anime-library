interface FavoriteMangaResponse {
	last_page: number;
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	top: FavoriteMangaResult[];
}

interface FavoriteMangaResult {
	image_url: string;
	mal_id: number;
	members: number;
	rank: number;
	score: number;
	title: string;
	type: string;
	url: string;
}

export {FavoriteMangaResponse, FavoriteMangaResult};
