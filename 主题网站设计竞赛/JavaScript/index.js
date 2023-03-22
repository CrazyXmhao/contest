// 获取轮播相关元素
var carousel = document.getElementById('carousel');
var images = carousel.getElementsByTagName('img');
var prev = document.createElement('div');
var next = document.createElement('div');

// 初始化轮播
var current = 0;
var timer = setInterval(function() {
  showImage(current);
  current++;
  if (current >= images.length) {
    current = 0;
  }
}, 5000);

// 添加轮播控制按钮
prev.className = 'carousel-prev';
prev.innerHTML = '&lt;';
prev.addEventListener('click', function() {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  showImage(current);
});

next.className = 'carousel-next';
next.innerHTML = '&gt;';
next.addEventListener('click', function() {
  current++;
  if (current >= images.length) {
    current = 0;
  }
  showImage(current);
});

carousel.appendChild(prev);
carousel.appendChild(next);

// 显示指定图片
function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
}
