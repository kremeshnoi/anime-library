import { AnimeByIdResponse } from '@/interfaces/AnimeByIdResponse';
import { AnimeAiringResponseTop } from '@/interfaces/AnimeAiringResponse';
import { AnimeSearchedResponseResults } from '@/interfaces/AnimeSearchedResponse';
import { AnimeRecommendationsByIdResponseRecommendations } from "@/interfaces/AnimeRecommendationsById";
import { AnimeFavoriteResponseTop } from '@/interfaces/AnimeFavoriteResponse';
import { CharactersFavoriteResponseTop } from '@/interfaces/CharactersFavoriteResponse';
import { MangaFavoriteResponseTop } from '@/interfaces/MangaFavoriteResponse';
import { MangaByIdResponse } from '@/interfaces/MangaByIdResponse';
import { MangaRecommendationsByIdResponseRecommendations } from "@/interfaces/MangaRecommendationsById";
import { UserInfoResponse } from '@/interfaces/UserInfoResponse';

export interface State {
	animeAiring: AnimeAiringResponseTop[];
	animeById: AnimeByIdResponse[];
	animeFavorite: AnimeFavoriteResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	animeRecommendationsById: AnimeRecommendationsByIdResponseRecommendations[];
	characterById: CharactersFavoriteResponseTop[];
	charactersFavorite: CharactersFavoriteResponseTop[];
	mangaById: MangaByIdResponse[];
	mangaFavorite: MangaFavoriteResponseTop[];
	mangaRecommendationsById: MangaRecommendationsByIdResponseRecommendations[];
	userInfo: UserInfoResponse[];
}
