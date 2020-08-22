interface AnimeByIdResponse {
	aired: AnimeResponseAired[];
	airing: boolean;
	background: string;
	broadcast: string;
	duration: string;
	ending_themes: string[];
	episodes: number;
	favorites: number;
	genres: AnimeResponseGenres[];
	image_url: string;
	licensors: AnimeResponseLicensors[];
	mal_id: number;
	members: number;
	opening_themes: string[];
	popularity: number;
	premiered: string;
	producers: AnimeResponseProducers[];
	rank: number;
	rating: string;
	related: AnimeResponseRelated[];
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	score: number;
	scored_by: number;
	source: string;
	status: string;
	studios: AnimeResponseStudios[];
	synopsis: string;
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	trailer_url: string;
	type: string;
	url: string;
}

interface AnimeResponseAired {
	from: string;
	prop: AnimeResponseAiredProp[]
	string: string;
	to: string;
}

interface AnimeResponseAiredProp {
	from: AnimeResponseAiredPropFrom[];
	to: AnimeResponseAiredPropTo[];
}

interface AnimeResponseAiredPropFrom {
	day: number;
	month: number;
	year: number;
}

interface AnimeResponseAiredPropTo {
	day: number;
	month: number;
	year: number;
}

interface AnimeResponseGenres {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface AnimeResponseLicensors {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface AnimeResponseProducers {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface AnimeResponseRelated {
	Adaptation: AnimeResponseRelatedAdaptation[];
	Prequel: AnimeResponseRelatedPrequel;
}

interface AnimeResponseRelatedAdaptation {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface AnimeResponseRelatedPrequel {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface AnimeResponseStudios {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

export { AnimeByIdResponse };
