interface FavoriteCharactersResponse {
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	top: FavoriteCharactersResult[];
}

interface FavoriteCharactersResult {
	animeography: FavoriteCharactersAnimeography[];
	favorites: number;
	image_url: string;
	mal_id: number;
	mangaography: FavoriteCharactersMangaography[];
	name_kanji: string;
	rank: number;
	title: string;
	url: string;
}

interface FavoriteCharactersAnimeography {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface FavoriteCharactersMangaography {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

export {FavoriteCharactersResponse, FavoriteCharactersResult};
