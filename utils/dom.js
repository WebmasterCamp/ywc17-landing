export const isInViewport = function (elem) {
  const position = elem.getBoundingClientRect()
  return position.top < window.innerHeight && position.bottom >= 0
}
  
export const getDistance = function (elem) {
  const position = elem.getBoundingClientRect()
  return position.top - window.innerHeight
}
