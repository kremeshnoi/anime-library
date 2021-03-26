export default function ({ route }) {
  if (route.name === "sign-in") return "Authentication"
  if (route.name === "sign-up") return "Authentication"
  if (route.name === "recovery") return "Authentication"

  return "Base"
}
