interface CharacterFavoriteResponse {
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	top: CharacterFavoriteResponseTop[];
}

interface CharacterFavoriteResponseTop {
	animeography: CharacterFavoriteResponseTopAnimeography[];
	favorites: number;
	image_url: string;
	mal_id: number;
	mangaography: CharacterFavoriteResponseTopMangaography[];
	name_kanji: string;
	rank: number;
	title: string;
	url: string;
}

interface CharacterFavoriteResponseTopAnimeography {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface CharacterFavoriteResponseTopMangaography extends CharacterFavoriteResponseTopAnimeography {}

export { CharacterFavoriteResponse, CharacterFavoriteResponseTop };
