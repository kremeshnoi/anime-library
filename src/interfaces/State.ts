//Anime
import { AnimeByIdResponse } from '@/interfaces/AnimeByIdResponse';
import { AnimeAiringResponseTop } from '@/interfaces/AnimeAiringResponse';
import { AnimeGenreResponseMalUrl } from '@/interfaces/AnimeGenreResponse';
import { AnimeFavoriteResponseTop } from '@/interfaces/AnimeFavoriteResponse';
import { AnimeSearchedResponseResults } from '@/interfaces/AnimeSearchedResponse';
import { AnimeByPopularityResponseTop } from '@/interfaces/AnimeByPopularityResponse';
import { AnimeRecommendationsByIdResponseRecommendations } from '@/interfaces/AnimeRecommendationsById';

//Character
import { CharacterFavoriteResponseTop } from '@/interfaces/CharacterFavoriteResponse';

//Manga
import { MangaFavoriteResponseTop } from '@/interfaces/MangaFavoriteResponse';
import { MangaByIdResponse } from '@/interfaces/MangaByIdResponse';
import { MangaRecommendationsByIdResponseRecommendations } from '@/interfaces/MangaRecommendationsById';

//User
import { UsersInfoResponse } from '@/interfaces/UsersInfoResponse';

export interface StateAnime {
	animeById: AnimeByIdResponse[];
	animeAiring: AnimeAiringResponseTop[];
	animeGenre: AnimeGenreResponseMalUrl[];
	animeFavorite: AnimeFavoriteResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	animeByPopularity: AnimeByPopularityResponseTop[];
	animeRecommendationsById: AnimeRecommendationsByIdResponseRecommendations[];
}

export interface StateCharacter {
	characterById: CharacterFavoriteResponseTop[];
	characterFavorite: CharacterFavoriteResponseTop[];
}

export interface StateManga {
	mangaById: MangaByIdResponse[];
	mangaFavorite: MangaFavoriteResponseTop[];
	mangaRecommendationsById: MangaRecommendationsByIdResponseRecommendations[];
}

export interface StateUsers {
	userInfo: UsersInfoResponse[];
}

