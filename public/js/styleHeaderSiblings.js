console.log("###START###");
var styleHeaderSiblings = function () {
  var headers = document.getElementsByTagName("h1");
  for (var i = 0; i < headers.length; i++) {
    var elem = getNextElem(headers[i].nextSibling); //找到真正的next node
    elem.style.color = "red";
  }
};
function getNextElem(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElem(node.nextSibling);
  }
  return null;
}
addLoadEvent(styleHeaderSiblings);
