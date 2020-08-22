import { UserInfoResponse } from "@/interfaces/UserInfoResponse";
import { AnimeByIdResponse } from "@/interfaces/AnimeByIdResponse.ts";
import { AnimeAiringResponseTop } from "@/interfaces/AnimeAiringResponse.ts";
import { AnimeSearchedResponseResults } from "@/interfaces/AnimeSearchedResponse.ts";
import { AnimeFavoriteResponseTop } from "@/interfaces/AnimeFavoriteResponse.ts";
import { MangaFavoriteResponseTop } from "@/interfaces/MangaFavoriteResponse.ts";
import { CharactersFavoriteResponseTop } from "@/interfaces/CharactersFavoriteResponse.ts";

export interface State {
	userInfo: [];
	animeById: AnimeByIdResponse[];
	animeAiring: AnimeAiringResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	animeFavorite: AnimeFavoriteResponseTop[];
	charactersFavorite: CharactersFavoriteResponseTop[];
	mangaFavorite: MangaFavoriteResponseTop[];
}
