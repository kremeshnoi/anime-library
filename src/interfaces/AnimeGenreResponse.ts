interface AnimeGenreResponse {
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	mal_url: AnimeGenreResponseMalUrl[];
	item_count: number;
	anime: AnimeGenreResponseAnime[];
}

interface AnimeGenreResponseMalUrl {
	mal_id: number,
	type: string,
	name: string,
	url: string
}

interface AnimeGenreResponseAnime {
	type: string,
	airing_start: string,
	episodes: number,
	members: number,
	genres: AnimeGenreResponseAnimeGenres [];
}

interface AnimeGenreResponseAnimeGenres {
	mal_id: number,
	type: string,
	name: string,
	url: string
}

export { AnimeGenreResponse, AnimeGenreResponseMalUrl };
