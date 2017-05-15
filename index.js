function nestedTarget() {
  return document.querySelector('#nested .target')
}

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function deepestChild() {
  var grandNode = document.querySelectorAll('#grand-node')
  return grandNode[grandNode.length-1]
}
