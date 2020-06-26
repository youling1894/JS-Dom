function diaplayCitations() {
  var quote = document.getElementsByTagName("blockquote");
  for (var i = 0; i < quote.length; i++) {
    var current_quote = quote[i];
    //如果当前的quote没有链接，跳过本次循环动作
    if (!current_quote.getAttribute("cite")) continue;
    //获取链接
    var url = current_quote.getAttribute("cite");
    //找到放置的位置 因为p与blockquote中有换行符其实也算是最后一个节点，所以要将这种过滤掉，使明眼看到的节点真正成为最后一个节点
    //获取当前元素节点的所有元素节点
    var quoteEl = current_quote.getElementsByTagName("*");
    //这样就可以获取所有的元素节点，显然p是最后一个 用quoteEl的length-1即可得到
    //如果没有子元素就跳过本次循环
    if (quoteEl.length < 1) continue;
    var lastChild = quoteEl[quoteEl.length - 1]; //真正的最后一个节点

    //开始创建链接
    var link = document.createElement("a");
    var link_txt = document.createTextNode("source");
    link.appendChild(link_txt);
    link.setAttribute("href", url);
    //插入链接 使用sup上标元素 可以更好看一些
    var superscript = document.createElement("sup");
    superscript.appendChild(link);
    lastChild.appendChild(superscript);
  }
}
addLoadEvent(diaplayCitations);
