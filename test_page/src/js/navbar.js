var lisNav = document.querySelectorAll("div.navbar li");
var num = 0;

for (var i = 0; i < lisNav.length; i++) {
  lisNav[i].index = i;
  lisNav[i].onclick = function () {
    for (var k = 0; k < lisNav.length; k++) {
      lisNav[k].className = "";
    }
    this.className = "nav_active";
  }
  lisNav[i].onmouseout = function () {
    num = this.index;
  }
}
