import { SearchAnimeResult } from "@/interfaces/searchedAnime.ts";
import { FavoriteAnimeResult } from "@/interfaces/favoriteAnime.ts";
import { FavoriteMangaResult } from "@/interfaces/favoriteManga.ts";

export interface State {
	animeResult: [];
	airingAnimeResult: [];
	searchAnimeResult: SearchAnimeResult[];
	favoriteAnimeResult: FavoriteAnimeResult[];
	favoriteMangaResult: FavoriteMangaResult[];
	favoriteCharactersResult: []
}
