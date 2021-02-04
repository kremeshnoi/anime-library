import createApp from './app.js'

import authService from './service.auth.js'
import databaseService from './service.database.js'

const appConfig = {"apiKey":"AIzaSyCIPI4pf_bCw6vyUB7sg8ZWvU2MpCmR288","authDomain":"otaku-library-b5dd4.firebaseapp.com","databaseURL":"https:\u002F\u002Fotaku-library-b5dd4.firebaseio.com","projectId":"otaku-library-b5dd4","storageBucket":"otaku-library-b5dd4.appspot.com","messagingSenderId":"75933468300","appId":"1:75933468300:web:ea747d3df0d9d601a19da9","measurementId":"G-P47VCZ10ZJ"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    databaseService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      databaseService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    database
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    database: database
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined") {
    window.$nuxt.$options[injectKey] = value
  }
}