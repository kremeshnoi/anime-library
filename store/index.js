export const state = () => ({
  error: null
})

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  }
}

export const actions = {
  async addToLibrary({ dispatch }, { type, status, id }) {
    try {
      const uid = await dispatch('auth/getUid')

      if(type === 'Manga') type = 'manga'
      else type = 'anime'

      await this.$fire.database
        .ref(`/users/${ uid }/${ type }/${ id }/`)
        .set({ status })

      M.toast({ html: 'Added to the library', classes: 'green', displayLength: 10000 })

    } catch (error) {
      throw error.message
    }
  },
  computeRoute(ctx, { resultItem, clickType }) {
    try {
      let type = resultItem.type
      const id = resultItem.mal_id
      const title = resultItem.url
        .split('/')
        .splice(-1, 1)[0]
        .toLowerCase()
        .split('_')
        .join('-')

      if (type === undefined) {
        if (resultItem.role || resultItem.name_kanji) type = 'characters'
        else if ($nuxt.$router.app.$route.name === 'anime-id-title') type = 'anime'
        else if ($nuxt.$router.app.$route.name === 'manga-id-title') type = 'manga'
      }

      else if (type === 'manga') type = 'manga'
      else if (type === 'Manga') type = 'manga'
      else if (type === 'Novel') type = 'manga'
      else if (type === 'Manhwa') type = 'manga'
      else if (type === 'One-shot') type = 'manga'
      else if (type === 'Doujinshi') type = 'manga'
      else if (type !== 'Manga' && type !== 'manga') type = 'anime'

      if (clickType) {
        const routeData = $nuxt.$router.resolve({ name: `${ type }` + '-id-title', params: { id, title } })
        window.open(routeData.href, '_blank')
      } else {
        $nuxt.$router.push({ name: `${ type }` + '-id-title', params: { id, title } })
      }

    } catch (error) {
      throw error.message
    }
  },
  computeRouteByGenre(ctx, { genresResult, genre, clickType }) {
    try {
      let type = genresResult.type
      const id = genre.id
      const title = genre.title
        .split('/')
        .splice(-1, 1)[0]
        .toLowerCase()
        .split('_')
        .join('-')

      switch (type) {
        case 'anime':
          type = 'anime-genres'
          break
        case 'manga':
          type = 'manga-genres'
          break
      }

      if (clickType) {
        const routeData = $nuxt.$router.resolve({ name: `${ type }` + '-id-title', params: { id, title } })
        window.open(routeData.href, '_blank')
      } else {
        $nuxt.$router.push({ name: `${ type }` + '-id-title', params: { id, title } })
      }

    } catch (error) {
      throw error.message
    }
  },
  computeRouteByRelated(ctx, { wholeData, name, clickType }) {
    try {
      let type = wholeData.type
      const id = wholeData.mal_id
      const title = wholeData.url
        .split('/')
        .splice(-1, 1)[0]
        .toLowerCase()
        .split('_')
        .join('-')

      const related = name
      .split('/')
      .splice(-1, 1)[0]
      .toLowerCase()
      .split(' ')
      .join('-')

      if (type === undefined) {
        if (wholeData.role || wholeData.name_kanji) type = 'characters'
        else if ($nuxt.$router.app.$route.name === 'anime-id-title') type = 'anime'
        else if ($nuxt.$router.app.$route.name === 'manga-id-title') type = 'manga'
      }

      else if (type === 'manga') type = 'manga'
      else if (type === 'Manga') type = 'manga'
      else if (type === 'Novel') type = 'manga'
      else if (type === 'Manhwa') type = 'manga'
      else if (type === 'One-shot') type = 'manga'
      else if (type === 'Doujinshi') type = 'manga'
      else if (type !== 'Manga' && type !== 'manga') type = 'anime'

      if (clickType) {
        const routeData = $nuxt.$router.resolve({ name: `${ type }` + '-id-title-related', params: { id, title, related, name } })
        window.open(routeData.href, '_blank')
      } else {
        $nuxt.$router.push({ name: `${ type }` + '-id-title-related', params: { id, title, related, name } })
      }

    } catch (error) {
      throw error.message
    }
  }
}

export const getters = {
  error: state => state.error
}
