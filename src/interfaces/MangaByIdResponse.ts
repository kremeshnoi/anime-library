interface MangaByIdResponse {
	authors: MangaByIdResponseAuthors[];
	background: string;
	chapters: string;
	favorites: string;
	genres: MangaByIdResponseGenres[];
	image_url: string;
	mal_id: number;
	members: number;
	popularity: number;
	published: MangaByIdResponsePublished[];
	publishing: boolean;
	rank: number;
	related: MangaByIdResponseRelated[];
	request_cache_expiry: number;
	request_cached: boolean;
	request_hash: string;
	score: number;
	scored_by: number;
	serializations: MangaByIdResponseSerializations[];
	status: string;
	synopsis: string;
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	url: string;
	volumes: number;
}

interface MangaByIdResponseAuthors {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

interface MangaByIdResponseGenres extends MangaByIdResponseAuthors {}

interface MangaByIdResponsePublished {
	from: string;
	prop: MangaByIdResponsePublishedProp[];
	string: string;
	to: string;
}

interface MangaByIdResponsePublishedProp {
	from: MangaByIdResponsePublishedPropFrom[];
	to: MangaByIdResponsePublishedPropTo[];
}

interface MangaByIdResponsePublishedPropFrom {
	day: number;
	month: number;
	year: number;
}

interface MangaByIdResponsePublishedPropTo extends MangaByIdResponsePublishedPropFrom {}

interface MangaByIdResponseRelated {
	Adaptation: MangaByIdResponseRelatedAdaptation[];
	'Alternative version': MangaByIdResponseRelatedAlternativeVersion[];
	Character: MangaByIdResponseRelatedCharacter[];
	'Side story': MangaByIdResponseRelatedSideStory[];
	'Spin-off': MangaByIdResponseRelatedSpinOff[];
}

interface MangaByIdResponseRelatedAdaptation extends MangaByIdResponseAuthors {}

interface MangaByIdResponseRelatedAlternativeVersion extends MangaByIdResponseAuthors {}

interface MangaByIdResponseRelatedCharacter extends MangaByIdResponseAuthors {}

interface MangaByIdResponseRelatedSideStory extends MangaByIdResponseAuthors {}

interface MangaByIdResponseRelatedSpinOff extends MangaByIdResponseAuthors {}

interface MangaByIdResponseSerializations extends MangaByIdResponseAuthors {}

export { MangaByIdResponse };
