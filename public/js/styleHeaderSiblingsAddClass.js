var styleHeaderSiblingsAddClass = function (tag, classValue) {
  var headers = document.getElementsByTagName(tag);
  for (var i = 0; i < headers.length; i++) {
    var elem = getNextElem(headers[i].nextSibling); //找到真正的next node
    //用添加class的方式改变style 这样就可以分层了
    //elem.className = "intro";
    //也可以使用追加方式
    //elem.className += "intro";
    //其实最好封装成一个方法，把两者结合在一起
    addClass(elem, classValue);
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
function addClass(element, value) {
  if (element.className) {
    let newClass = element.className + " "; //class 名要用空格分开才有效
    newClass += value; //在原有的class基础上加新的class
    element.className = newClass;
  } else {
    element.className = value;
  }
}
//将函数进行抽象，复用的可能性更高
addLoadEvent(styleHeaderSiblingsAddClass("h1", "intro"));
