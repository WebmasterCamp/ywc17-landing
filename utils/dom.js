export const isInViewport = function (elem) {
  const position = elem.getBoundingClientRect()
  return position.top < window.innerHeight && position.bottom >= 0
}
  
export const getDistance = function (elem) {
  const position = elem.getBoundingClientRect()
  return position.top - window.innerHeight
}

export const selectText = function (event, ref) {
  const elm = ref ? this.$refs[ref] : event.target
  if (document.selection) { // IE
    const range = document.body.createTextRange()
    range.moveToElementText(elm)
    range.select()
  } else if (window.getSelection) {
    const range = document.createRange()
    range.selectNode(elm)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
  }
}
