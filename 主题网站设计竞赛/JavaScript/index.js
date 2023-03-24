function scrollDown() {
  $('.content_third').animate({
      scrollLeft: '-=1500'
  }, 800); /* 时间单位是毫秒 */
}

function scrollUp() {
  $('.content_third').animate({
      scrollLeft: '+=1500'
  }, 800);
}



  $(document).ready(function(){
    setInterval(function(){
      var currentPos = $('#carouselExample .carousel-inner').position().top;
      var itemHeight = $('#carouselExample .carousel-item').height();
      var newPos = currentPos - 10;
      $('#carouselExample .carousel-inner').animate({top: newPos}, 1, function(){
        if (Math.abs(newPos) >= itemHeight) {
          $('#carouselExample .carousel-item:first').appendTo('#carouselExample .carousel-inner');
          $('#carouselExample .carousel-inner').css('top', 0);
        }
      });
    }, 1);
  });

