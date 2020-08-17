interface AnimeSearchedResponse {
	last_page: number;
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	results: AnimeSearchedResponseResults[];
}

interface AnimeSearchedResponseResults {
	airing: boolean;
	end_date: string;
	episodes: number;
	image_url: string;
	mal_id: number;
	members: number;
	rated: string;
	score: number;
	start_date: string;
	synopsis: string;
	title: string;
	type: string;
	url: string;
}

export { AnimeSearchedResponse, AnimeSearchedResponseResults };
