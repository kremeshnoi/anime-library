import { AnimeResponse } from "@/interfaces/animeResponse.ts";
import { AnimeAiringResponseTop } from "@/interfaces/animeAiringResponse.ts";
import { AnimeSearchedResponseResults } from "@/interfaces/animeSearchedResponse.ts";
import { AnimeFavoriteResponseTop } from "@/interfaces/animeFavoriteResponse.ts";
import { MangaFavoriteResponseTop } from "@/interfaces/mangaFavoriteResponse.ts";
import { CharactersFavoriteResponseTop } from "@/interfaces/charactersFavoriteResponse.ts";

export interface State {
	anime: AnimeResponse[];
	animeAiring: AnimeAiringResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	animeFavorite: AnimeFavoriteResponseTop[];
	charactersFavorite: CharactersFavoriteResponseTop[];
	mangaFavorite: MangaFavoriteResponseTop[];
}
