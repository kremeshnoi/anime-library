import {SearchAnimeResult} from "@/interfaces/search.ts";
import {FavoriteAnimeResult} from "@/interfaces/favorite.ts";

export interface State {
	searchAnimeResult: SearchAnimeResult[];
	favoriteAnimeResult: FavoriteAnimeResult[];
}
