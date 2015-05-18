$(document).ready(function() { 
    
/*Nav scroll down*/
    $(window).scroll(function() {
      
      if($(window).scrollTop() > 599 && 
        $('.nav-wrapper').css("position")!= "fixed")
      {
        $('.nav-wrapper').hide(function(){
            $('.nav-wrapper').css("position", "fixed");
            $('.nav-wrapper').slideDown('1000');
        })
      }
      else if($(window).scrollTop() <= 599)
      {
        $('.nav-wrapper').css("position", "initial");
      }
    });


/*Slow scroll*/
  var navHeight = $('.nav-wrapper').height();

  $("nav a").click(function(){
    var href = $(this).attr('href');
    $("html,body").animate(
      {scrollTop:$(href).offset().top - navHeight},"3000");
    return false});

  /*Sliders*/

    var slideNum = 0;
    var slides = $('.image-slider img');
    var sliderTimer = null;
     
    slides.eq(slideNum).show();

       var sliderTimerFunc = function(){
        slides.eq(slideNum).fadeOut(1000);

        slideNum++;

        if (slideNum >= slides.length) {
          slideNum = 0;
        }
        slides.eq(slideNum).fadeIn(1000);
      };

    sliderTimer = setInterval(sliderTimerFunc, 2500);


    $('#btn-start').click(function(){
      sliderTimer = setInterval(sliderTimerFunc, 2500);
    });

    $('#btn-stop').click(function(){
      sliderTimer = window.clearInterval(sliderTimer);
    });

    

});
    
