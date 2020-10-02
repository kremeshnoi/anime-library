interface MangaCharactersResponse {
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	characters: MangaCharactersResponseCharacters[];
}

interface MangaCharactersResponseCharacters {
	image_url: string;
	mal_id: number;
	role: string;
	url: string;
}

export { MangaCharactersResponse,  MangaCharactersResponseCharacters };
