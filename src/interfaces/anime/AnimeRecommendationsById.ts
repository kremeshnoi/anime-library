interface AnimeRecommendationsByIdResponse {
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	top: AnimeRecommendationsByIdResponseRecommendations[];
}

interface AnimeRecommendationsByIdResponseRecommendations {
	image_url: string;
	mal_id: number;
	title: string;
	url: string;
	recommendation_count: number;
	recommendation_url: string;
}

export { AnimeRecommendationsByIdResponse, AnimeRecommendationsByIdResponseRecommendations };
