import {SearchAnimeResult} from "@/interfaces/searchedAnime.js";
import {FavoriteAnimeResult} from "@/interfaces/favoriteAnime.js";

export interface State {
	searchAnimeResult: SearchAnimeResult[];
	favoriteAnimeResult: FavoriteAnimeResult[];
}
