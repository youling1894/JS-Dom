function getNewContent() {
  var request = getHTTPObject();
  if (request) {
    request.open("GET", "ajax.txt", true);
    var recive = function () {
      if (request.readyState == 4) {
        console.log("ready");
        var para = document.createElement("p");
        var txt = document.createTextNode(request.responseText);
        console.log(request);
        para.appendChild(txt);
        document.getElementById("new").appendChild(para);
      }
    };
    request.onreadystatechange = recive;
    request.send(null);
  } else {
    alert("error");
  }
  console.log("function done");
}
addLoadEvent(getNewContent);
//choreme浏览器会出现跨域错误
