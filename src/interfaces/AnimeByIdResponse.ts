interface AnimeByIdResponse {
	aired: AnimeByIdResponseAired[];
	airing: boolean;
	background: string;
	broadcast: string;
	duration: string;
	ending_themes: string[];
	episodes: number;
	favorites: number;
	genres: AnimeByIdResponseGenres[];
	image_url: string;
	licensors: AnimeByIdResponseLicensors[];
	mal_id: number;
	members: number;
	opening_themes: string[];
	popularity: number;
	premiered: string;
	producers: AnimeByIdResponseProducers[];
	rank: number;
	rating: string;
	related: AnimeByIdResponseRelated[];
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	score: number;
	scored_by: number;
	source: string;
	status: string;
	studios: AnimeByIdResponseStudios[];
	synopsis: string;
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	trailer_url: string;
	type: string;
	url: string;
}

interface AnimeByIdResponseAired {
	from: string;
	prop: AnimeByIdResponseAiredProp[]
	string: string;
	to: string;
}

interface AnimeByIdResponseAiredProp {
	from: AnimeByIdResponseAiredPropFrom[];
	to: AnimeByIdResponseAiredPropTo[];
}

interface AnimeByIdResponseAiredPropFrom {
	day: number;
	month: number;
	year: number;
}

interface AnimeByIdResponseAiredPropTo extends  AnimeByIdResponseAiredPropFrom {}

interface AnimeByIdResponseGenres {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface AnimeByIdResponseLicensors extends AnimeByIdResponseGenres {}

interface AnimeByIdResponseProducers extends AnimeByIdResponseGenres {}

interface AnimeByIdResponseRelated {
	Adaptation: AnimeByIdResponseRelatedAdaptation[];
	Prequel: AnimeByIdResponseRelatedPrequel;
}

interface AnimeByIdResponseRelatedAdaptation extends AnimeByIdResponseGenres {}

interface AnimeByIdResponseRelatedPrequel extends AnimeByIdResponseGenres {}

interface AnimeByIdResponseStudios extends AnimeByIdResponseGenres {}

export { AnimeByIdResponse };
