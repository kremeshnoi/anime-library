

export default async function (session) {
  await import('firebase/database')

  const databaseService = session.database()

  return databaseService
}
