import {SearchAnimeResult} from "@/interfaces/searchedAnime.js";
import {FavoriteAnimeResult} from "@/interfaces/favoriteAnime.js";

export interface State {
	animeResult: [];
	airingAnimeResult: [];
	searchAnimeResult: SearchAnimeResult[];
	favoriteAnimeResult: FavoriteAnimeResult[];
	favoriteMangaResult: [];
	favoriteCharactersResult: []
}
