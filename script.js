$(window).scroll(function() {
    var heroHeight = $('header').height();
    var yPosition = $(document).scrollTop();
    
      
    if (yPosition <= heroHeight) {
      var effectFactor = yPosition / heroHeight;
      var rotation = effectFactor * (Math.PI / 2 - Math.asin( (heroHeight - yPosition) / heroHeight ));
      $('.hero').css({
        '-webkit-transform': 'rotateX('+rotation+'rad)',
        'transform': 'rotateX('+rotation+'rad)',
      })
      .find('.overlay').css('opacity', effectFactor);
    }
    
    
    /**
     * Sticky nav-bar
     */
    if (yPosition <= heroHeight) {
      $('nav').removeClass('fixed');
    } else {
      $('nav').addClass('fixed');
    }
    
  });
  var angle = 0;
  function galleryspin(sign) { 
  spinner = document.querySelector("#spinner");
  if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
  spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
  }