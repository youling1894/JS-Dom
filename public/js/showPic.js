addLoadEvent(createPre);
addLoadEvent(countChildren);

function countChildren() {
  if (!document.getElementById) return false;
  if (!document.getElementById("pre")) return false;
  var gallery = document.getElementsByClassName("nav")[0];
  var links = gallery.getElementsByTagName("a");
  console.log(links);
  for (var i = 0; i < links.length; i++) {
    // var icon = links[i].getElementsByTagName("img")[0];
    // if (icon) {
    //   icon.src = links[i].getAttribute("href"); //HTML DOM
    // }
    links[i].onclick = function () {
      return !showPic(this);
    };
  }
}
function showPic(whichPic) {
  var picUrl = whichPic.getAttribute("href");
  var pre = document.getElementById("pre");
  if (!pre) return false;
  pre.setAttribute("src", picUrl); //DOM Core
  var info = document.getElementById("info");
  if (info) {
    var picTitle = whichPic.getAttribute("title")
      ? whichPic.getAttribute("title")
      : "";
    info.firstChild.nodeValue = picTitle;
  }
  return true;
}
function createPre() {
  var container = document.getElementById("container");

  var img = document.createElement("img");
  img.setAttribute("src", "./public/img/pre.jpg");
  img.setAttribute("id", "pre");
  console.log(img);
  var pic = document.getElementsByClassName("pic")[0];
  pic.appendChild(img);

  var info = document.createElement("div");
  info.setAttribute("class", "info");
  info.setAttribute("id", "info");
  var text = document.createTextNode("title...");
  info.appendChild(text);

  var no = document.createTextNode("no.");
  text.parentNode.insertBefore(no, text); //在已有元素前插入一个元素

  //自定义insertAfter 实现在元素后插入一个元素
  var mid = document.createTextNode(" - ");
  insertAfter(mid, no);
  container.appendChild(info);
}
function insertAfter(newEl, targetEl) {
  var parent = targetEl.parentNode;
  if (parent.lastChild == targetEl) {
    //判断目标元素是否为最后一个
    parent.appendChild(newEl); //如果是的话就直接放在最后
  } else {
    //不是的话，找到目标元素后一个元素，放在那个元素之前
    parent.insertBefore(newEl, targetEl.nextSibling);
  }
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}
