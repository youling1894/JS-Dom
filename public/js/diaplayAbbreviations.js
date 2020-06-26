function dislayAbbreviations() {
  //考虑浏览器是否可以使用一些常规方法
  if (
    !document.createElement ||
    !document.createTextNode ||
    !document.getElementsByTagName
  ) {
    return false;
  }
  var abbreviations = document.getElementsByTagName("abbr");
  //判断是否有数据
  if (abbreviations.length < 1) {
    return false;
  }
  //创建一个用于存储数据的数组
  var defs = new Array();
  for (var i = 0; i < abbreviations.length; i++) {
    var current_abbr = abbreviations[i];
    //考虑到IE浏览器可能不识别abbr内容 如果当前元素没有子节点就跳到下一次循环 所以到最后dlist不会有任何子节点
    if (current_abbr.childNodes.length < 1) continue;
    //获取当前abbr标签里的值
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.firstChild.nodeValue;
    //以键值对的形式存入defs数组里
    defs[key] = definition;
  }
  console.log(defs);
  console.log(defs.length);
  //因为defs是键值对数组 所以没有长度
  //开始创建用于显示数据的标记
  var dlist = document.createElement("dl");
  //使用for/in 遍历 defs的键值对
  for (const key in defs) {
    if (defs.hasOwnProperty(key)) {
      const definition = defs[key];
      //建立并依赖成一个dt节点
      var dtitle = document.createElement("dt");
      var dtitle_txt = document.createTextNode(key);
      dtitle.appendChild(dtitle_txt);
      //同样方法建立dd节点
      var ddesc = document.createElement("dd");
      var ddesc_txt = document.createTextNode(definition);
      ddesc.appendChild(ddesc_txt);
      //再把他们都依赖于dl节点
      dlist.appendChild(dtitle);
      dlist.appendChild(ddesc);
    }
  }
  //判断dlist是否有子节点 来决定是否将他们添加到页面上
  if (dlist.childNodes.length < 1) {
    return false;
  }
  //完成后 把dl节点 放到文件尾部
  var header = document.createElement("h2");
  var header_txt = document.createTextNode("Abbreviations");
  header.appendChild(header_txt);
  document.body.appendChild(header);
  document.body.appendChild(dlist);
}

addLoadEvent(dislayAbbreviations);
