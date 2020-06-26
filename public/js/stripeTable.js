var stripeTable = function () {
  var tables = document.getElementsByTagName("table");
  for (let index = 0; index < tables.length; index++) {
    const element = tables[index];
    var flag = true;
    var rows = element.getElementsByTagName("tr");
    for (let index = 0; index < rows.length; index++) {
      const element = rows[index];
      if (flag) {
        flag = false;
      } else {
        element.style.backgroundColor = "#CCC";
        flag = true;
      }
    }
  }
};
//
var highLightRows = function () {
  var tables = document.getElementsByTagName("table");
  for (let index = 0; index < tables.length; index++) {
    const element = tables[index];
    var rows = element.getElementsByTagName("tr");
    for (let index = 0; index < rows.length; index++) {
      const element = rows[index];
      element.onmouseover = function () {
        this.style.fontWeight = "bold";
      };
      element.onmouseout = function () {
        this.style.fontWeight = "normal";
      };
    }
  }
};
addLoadEvent(stripeTable);
addLoadEvent(highLightRows);
