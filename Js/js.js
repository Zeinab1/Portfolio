$(document).ready(function()  {
  var $top  = $('.slider').height();
  console.log($top);
  $(window).scroll(function(event) {
    var y = $(this).scrollTop();
    //About--Header
    if(y >= 200){
      $("#about").fadeIn(1000).addClass('slide-in-left');
        }
    if(y >= 250){
      $("#about-bar").delay(1000).fadeIn(1000).addClass('slide-in-left');
        }
    //About--Hexagon
    if(y >= 450){
      $( "div.hexagon" ).delay(1000).each(function(i) {
        $(this).delay(200*i).fadeIn();
      });
    }
    if(y>=600){
      $( "div.way" ).each(function(i) {
        $(this).delay(200*i).fadeIn();
      });
    }
    //skills
    if(y>=700){
      $(".info2").fadeIn().animate({left:'400px', opacity:'0.8'},"slow");
      $(".skills").fadeIn().css({"left":"2000px"}).animate({left:"900px",opacity:'0.8'}, "slow");

    }
  
    //Project
    //Project--Header
    if(y>=1100){
      $("#project").fadeIn().css({"left":"2000px",position:"absolute"}).animate({left:"500px"}, "slow");
    }
    if(y>=1300){
      $("#project-bar").fadeIn().css({"left":"2000px",position:"absolute"}).animate({left:"500px"}, "slow");
    }
    //
    if (y >= $top +30){
      $('nav').addClass('shrink');
    }
    else{
      $('nav').removeClass('shrink');
    }
  });
  

});