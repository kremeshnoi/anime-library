import { AnimeResponse } from "@/interfaces/animeResponse.ts";
import { AnimeAiringResponseTop } from "@/interfaces/animeAiringResponse.ts";
import { AnimeSearchedResponseResults } from "@/interfaces/animeSearchedResponse.ts";
import { AnimeFavoriteResponseTop } from "@/interfaces/animeFavoriteResponse.ts";
import { MangaFavoriteResponseTop } from "@/interfaces/mangaFavoriteResponse.ts";
import { CharactersFavoriteResponseTop } from "@/interfaces/charactersFavoriteResponse.ts";

export interface State {
	animeResult: AnimeResponse[];
	airingAnimeResult: AnimeAiringResponseTop[];
	searchAnimeResult: AnimeSearchedResponseResults[];
	favoriteAnimeResult: AnimeFavoriteResponseTop[];
	favoriteMangaResult: MangaFavoriteResponseTop[];
	favoriteCharactersResult: CharactersFavoriteResponseTop[];
}
