import { UserInfoResponse } from "@/interfaces/UserInfoResponse";
import { AnimeByIdResponse } from "@/interfaces/AnimeByIdResponse";
import { AnimeAiringResponseTop } from "@/interfaces/AnimeAiringResponse";
import { AnimeSearchedResponseResults } from "@/interfaces/AnimeSearchedResponse";
import { AnimeFavoriteResponseTop } from "@/interfaces/AnimeFavoriteResponse";
import { MangaFavoriteResponseTop } from "@/interfaces/MangaFavoriteResponse";
import { CharactersFavoriteResponseTop } from "@/interfaces/CharactersFavoriteResponse";

export interface State {
	userInfo: [];
	animeById: AnimeByIdResponse[];
	animeAiring: AnimeAiringResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	animeFavorite: AnimeFavoriteResponseTop[];
	charactersFavorite: CharactersFavoriteResponseTop[];
	mangaById: AnimeByIdResponse[];
	mangaFavorite: MangaFavoriteResponseTop[];
}
