interface CharactersFavoriteResponse {
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	top: CharactersFavoriteResponseTop[];
}

interface CharactersFavoriteResponseTop {
	animeography: CharactersFavoriteResponseTopAnimeography[];
	favorites: number;
	image_url: string;
	mal_id: number;
	mangaography: CharactersFavoriteResponseTopMangaography[];
	name_kanji: string;
	rank: number;
	title: string;
	url: string;
}

interface CharactersFavoriteResponseTopAnimeography {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface CharactersFavoriteResponseTopMangaography {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

export { CharactersFavoriteResponse, CharactersFavoriteResponseTop };
