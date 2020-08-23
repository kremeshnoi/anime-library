import { AnimeByIdResponse } from "@/interfaces/AnimeByIdResponse";
import { AnimeAiringResponseTop } from "@/interfaces/AnimeAiringResponse";
import { AnimeSearchedResponseResults } from "@/interfaces/AnimeSearchedResponse";
import { AnimeFavoriteResponseTop } from "@/interfaces/AnimeFavoriteResponse";
import { CharactersFavoriteResponseTop } from "@/interfaces/CharactersFavoriteResponse";
import { MangaFavoriteResponseTop } from "@/interfaces/MangaFavoriteResponse";
import { MangaByIdResponse } from "@/interfaces/MangaByIdResponse";
import { UserInfoResponse } from "@/interfaces/UserInfoResponse";

export interface State {
	animeAiring: AnimeAiringResponseTop[];
	animeById: AnimeByIdResponse[];
	animeFavorite: AnimeFavoriteResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	characterById: CharactersFavoriteResponseTop[];
	charactersFavorite: CharactersFavoriteResponseTop[];
	mangaById: MangaByIdResponse[];
	mangaFavorite: MangaFavoriteResponseTop[];
	userInfo: UserInfoResponse[];
}
