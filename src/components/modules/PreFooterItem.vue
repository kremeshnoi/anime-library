<template lang="pug">

	.PreFooterListItem
		router-link.PreFooterListItem-title(to="/") {{ titles[listTitle] }}
			.PreFooterListItem-icon.material-icons keyboard_arrow_right
		.PreFooterListItem-content(v-for="(result, index) in lists" :key="index")
			p.PreFooterListItem-digit {{ index + 1 }}.
			router-link.PreFooterListItem-link(to="/") {{ result['title'] }}

</template>

<script>
import { mapActions, mapGetters } from "vuex";

const titles = Object.freeze({
  topAnimeList: "Top Anime",
  topMangaList: "Top Manga",
  charactersList: "Most Popular Characters"
});

const titlesVerb = Object.freeze({
  topAnimeList: "anime",
  topMangaList: "manga",
  charactersList: "characters"
});

export default {
  name: "PreFooterItem",
  props: {
    listTitle: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      lists: {},
      titles
    };
  },
  methods: {
    ...mapActions(["fetchTopList"]),
    fetchList(listName) {
      const isFav = listName !== "charactersList" ? "favorite" : "";
      this.fetchTopList([titlesVerb[listName], 1, isFav]).then(() => {
        this.lists = this.getTopListResult.slice(0, 9);
      });
    }
  },
  computed: {
    ...mapGetters(["getTopListResult"])
  },
  created() {
    this.fetchList(this.listTitle);
  }
};
</script>

<style lang="sass" scoped>

@import "../../assets/styles/utils/vars"
@import "../../assets/styles/utils/mixins"

.PreFooterListItem
	+flex(center, flex-start, column)

	&-title
		color: $color-dark
		font-size: 16px
		text-align: start
		padding: 0 0 8px 0
		width: 100%
		border-bottom: 1px solid rgba($color-dark, 0.2)
		+flex(space-between, center, row)
		&:hover
			color: $color-orange
			.PreFooterList-icon
				color: inherit

	&-content
		margin: 8px 0 0 0
		+flex(center, center, row)

	&-digit
		margin: 0 8px 0 0

	&-link
		color: $color-blue
		&:hover
			text-decoration: underline $color-blue
</style>
