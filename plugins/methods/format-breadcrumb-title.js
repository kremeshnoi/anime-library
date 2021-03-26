export default (context, inject) => {
  const formatBreadCrumbTitle = (title) => {
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

  inject("formatBreadCrumbTitle", formatBreadCrumbTitle)

  context.$formatBreadCrumbTitle = formatBreadCrumbTitle
}