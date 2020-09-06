var lisImg = document.querySelectorAll(".img li");
var lisDot = document.querySelectorAll(".dot li");
var banner = document.querySelector("div.rotation_chart");
var left = document.querySelector("div.left_btn");
var right = document.querySelector("div.right_btn");
 
var timer;
var number = 0;
 
function show() {
  for (var j = 0; j < lisDot.length; j++) {
    lisDot[j].className = "";
    lisImg[j].className = "";
  }
  lisDot[number].className = "current";
  lisImg[number].className = "active";
}
show()

var next = function () {
  number++;
  if (number >= lisDot.length) {
    number = 0;
    //实现循环
  }
  show();
}
timer = setInterval(next, 3000);
 
// 当鼠标滑入图片时停止轮播
banner.onmousemove = function () {
  clearInterval(timer);
}
// 当鼠标离开图片时，恢复自动轮播
banner.onmouseleave = function () {
  timer = setInterval(next, 3000);
}

//点击小圆点跳转
for (var i = 0; i < lisDot.length; i++) {
  lisDot[i].index = i;
  lisDot[i].onclick = function () {
    for (var k = 0; k < lisDot.length; k++) {
      lisDot[k].className = "";
      lisImg[k].className = "";
    }
    this.className = "current";
    lisImg[this.index].className = "active";
  }
  lisDot[i].onmouseout = function () {
    number = this.index;
    timer = setInterval(next, 3000);
  }
}

left.onclick = function () {
  number--;
  if (number < 0) {
    number = lisDot.length - 1;
  }
  show();
}

right.onclick = function () {
  number++;
  if (number >= lisDot.length) {
    number = 0;
  }
  show();
}
