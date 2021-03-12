export default (context, inject) => {
  const formatTitle = (oldTitle) => {
    const newTitle = oldTitle
    .split("-")
    .splice(-1, 1)[0]
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace(/[^A-Za-z']+[-]/g, "-")

    return newTitle
  }

  inject("formatTitle", formatTitle)

  context.$formatTitle = formatTitle
}