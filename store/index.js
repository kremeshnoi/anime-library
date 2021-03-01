export const state = () => ({
  error: null
});

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  }
};

export const actions = {
  async addToLibrary({ dispatch }, { type, status, id }) {
    try {
      const uid = await dispatch('auth/getUid');

      if(type === 'Manga') type = 'manga';
      else type = 'anime';

      await this.$fire.database
        .ref(`/users/${uid}/${type}/${id}/`)
        .set({ status });

      M.toast({ html: 'Added to the library', classes: 'green', displayLength: 10000 });

    } catch (error) {
      throw error.message;
    }
  },
  computeRoute(ctx, result) {
    try {
      let type = result.type;
      const id = result.mal_id;
      const title = result.url
        .split('/')
        .splice(-1, 1)[0]
        .toLowerCase()
        .split('_')
        .join('-');

      if (type === undefined) {
        if (result.role || result.name_kanji) type = 'characters';
        else if ($nuxt.$router.app.$route.name === 'anime-id-title') type = 'anime';
        else if ($nuxt.$router.app.$route.name === 'manga-id-title') type = 'manga';
      }

      else if (type === 'manga') type = 'manga';
      else if (type === 'Manga') type = 'manga';
      else if (type === 'Novel') type = 'manga';
      else if (type === 'Manhwa') type = 'manga';
      else if (type === 'One-shot') type = 'manga';
      else if (type === 'Doujinshi') type = 'manga';
      else if (type !== 'Manga' && type !== 'manga') type = 'anime';

      $nuxt.$router.push({ name: `${type}` + '-id-title', params: { id, title } });

    } catch (error) {
      throw error.message;
    }
  },
  computeRouteByGenre(ctx, { result, genre }) {
    try {
      console.log(result)
      let type = result.type;
      const id = genre.id;
      const title = genre.title
        .split('/')
        .splice(-1, 1)[0]
        .toLowerCase()
        .split('_')
        .join('-');

      switch (type) {
        case 'anime':
          type = 'anime-genres';
          break;
        case 'manga':
          type = 'manga-genres';
          break;
      }

      $nuxt.$router.push({ name: `${type}` + '-id-title', params: { id, title } });

    } catch (error) {
      throw error.message;
    }
  }
};

export const getters = {
  error: state => state.error
};
