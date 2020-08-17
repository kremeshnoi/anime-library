interface MangaFavoriteResponse {
	last_page: number;
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	top: MangaFavoriteResponseTop[];
}

interface MangaFavoriteResponseTop {
	image_url: string;
	mal_id: number;
	members: number;
	rank: number;
	score: number;
	title: string;
	type: string;
	url: string;
}

export { MangaFavoriteResponse, MangaFavoriteResponseTop };
