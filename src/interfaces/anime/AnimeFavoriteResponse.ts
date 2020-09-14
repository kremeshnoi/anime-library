interface AnimeFavoriteResponse {
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	top: AnimeFavoriteResponseTop[];
}

interface AnimeFavoriteResponseTop {
	end_date: string;
	episodes: number;
	image_url: string;
	mal_id: number;
	members: number;
	rank: number;
	score: number;
	start_date: string;
	title: string;
	type: string;
	url: string;
}

export { AnimeFavoriteResponse, AnimeFavoriteResponseTop };
