export default (context, inject) => {
  const formatRelatedTitle = (title) => {
    if(title === "spin-off") {
      return title
        .split(" ")
        .join("-")
        .replace(/^\w/, (c) => c.toUpperCase())
    } else {
      return title
        .split("-")
        .join(" ")
        .replace(/^\w/, (c) => c.toUpperCase())
    }
  }

  inject("formatRelatedTitle", formatRelatedTitle)

  context.$formatRelatedTitle = formatRelatedTitle
}