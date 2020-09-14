interface MangaRecommendationsByIdResponse {
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	top: MangaRecommendationsByIdResponseRecommendations[];
}

interface MangaRecommendationsByIdResponseRecommendations {
	image_url: string;
	mal_id: number;
	title: string;
	url: string;
	recommendation_count: number;
	recommendation_url: string;
}

export { MangaRecommendationsByIdResponse, MangaRecommendationsByIdResponseRecommendations };
