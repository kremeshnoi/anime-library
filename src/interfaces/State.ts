import { AnimeByIdResponse } from "@/interfaces/AnimeByIdResponse";
import { AnimeAiringResponseTop } from "@/interfaces/AnimeAiringResponse";
import { AnimeSearchedResponseResults } from "@/interfaces/AnimeSearchedResponse";
import { AnimeFavoriteResponseTop } from "@/interfaces/AnimeFavoriteResponse";
import { CharactersFavoriteResponseTop } from "@/interfaces/CharactersFavoriteResponse";
import { MangaFavoriteResponseTop } from "@/interfaces/MangaFavoriteResponse";
import { MangaByIdResponse } from "@/interfaces/MangaByIdResponse";
import { UserInfoResponse } from "@/interfaces/UserInfoResponse";

export interface State {
	userInfo: [];
	animeById: AnimeByIdResponse[];
	animeAiring: AnimeAiringResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	animeFavorite: AnimeFavoriteResponseTop[];
	charactersFavorite: CharactersFavoriteResponseTop[];
	mangaById: MangaByIdResponse[];
	mangaFavorite: MangaFavoriteResponseTop[];
}
