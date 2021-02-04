

export default async function (session, firebase, ctx, inject) {
  await import('firebase/auth')

  const authService = session.auth()

  return authService
}
