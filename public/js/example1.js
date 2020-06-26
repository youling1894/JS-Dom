var inner = function () {
  var inner = document.getElementById("inner");
  inner.innerHTML =
    "<em>这是用innerHTML添加的，可以把JS从标记（body）中分离出来。但还不是最优的。<br>因为它无法区分这是替换一段html内容还是插入一段html内容。";
  var innerGet = document.getElementById("innerGet");
  console.log(innerGet.innerHTML);
};
addLoadEvent(inner);
//addLoadEvent(inner);

var createP = function () {
  var para = document.createElement("p"); //创建一个节点-这时是个文档碎片-没有任何依附
  var testdiv = document.getElementById("testdiv"); //找到父元素节点
  var txt = document.createTextNode("hello txt"); //创建一个文本子节点 相当于para的fristChild
  para.appendChild(txt); //把子节点依赖与刚刚创建的节点
  testdiv.appendChild(para); //再依赖到父元素
};
addLoadEvent(createP);

var complex = function () {
  var complex = document.getElementById("complex");
  var para = document.createElement("p");
  var em = document.createElement("em");
  var emTxt = document.createTextNode("my em");
  var txt1 = document.createTextNode("hello ");
  var txt2 = document.createTextNode(" !!!");
  em.appendChild(emTxt);
  para.appendChild(txt1);
  para.appendChild(em);
  para.appendChild(txt2);
  complex.appendChild(para);
};
addLoadEvent(complex);
