$(document).ready(function()  {
  var $top  = $('.slider').height();
  var bottom_of_element = $(".about").offset().top + $(".about").outerHeight();
  

  
  $(window).scroll(function(event) {
    var y = $(this).scrollTop();
    var x = $(this).width();
   //for mobile 
   if(y >= 800 & x <= 375){
    $('.fill:eq(0)').animate({width:'70%'},500);
    $('.fill:eq(1)').animate({width:'60%'},500);
    $('.fill:eq(2)').animate({width:'85%'},500);
  }
    if(x <= 375){
      
    }
    //About--Header
    if(y >= 300 & x > 375){
      $("#about" ).fadeIn(1000).addClass('slide-in-left');
        }
    if(y >= 350 & x > 375){
      $("#about-bar").delay(1000).fadeIn(1000).addClass('slide-in-left');
        }
    
    //About--Hexagon
    if(y >= 550 & x > 375){
    
      $( ".hexagon" ).delay(1000).each(function(i) {
        $(this).delay(200*i).fadeIn();
      });
    }
    
    if(y>=650 & x > 375){
      $( "way" ).delay(1000).each(function(i) {
        $(this).delay(200*i).fadeIn();
      });
    }
 
    //skills
    if(y>=750 & x > 375){
      $(".info2").fadeIn().animate({left:'400px', opacity:'0.8'},"slow");
      $(".skills").fadeIn().css({"left":"2000px"}).animate({left:"900px",opacity:'0.8'}, "slow");

    }
  
    //Project
    //Project--Header
    if(y>=1100 & x > 375 ){
      $("#project").fadeIn().css({"left":"2000px",position:"absolute"}).animate({left:"500px"}, "slow");
    }
    if(y>=1300 & x > 375){
      $("#project-bar").fadeIn().css({"left":"2000px",position:"absolute"}).animate({left:"500px"}, "slow");
    }
    //
    if (y >= $top +30 & x > 375 ){
      $('nav').addClass('shrink');
    }
    else{
      $('nav').removeClass('shrink');
    }
   
   
  });
 
  //clicked bar
  $(".bar-wrap").click(function(){
    $(".panel").slideToggle();
  });
  //clicked link
  $(".page-link").click(function(){
    $(".page-link").removeClass("active");
    $(this).addClass("active");

  });
  $(".about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
    $(".panel").slideUp();
});
$(".portfolio").click(function() {
  $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
  }, 500);
  $(".panel").slideUp();
});
//portfolio
$(".filter").click(function(){
  $(".filter").removeClass("active-port ");
  $(this).addClass("active-port");
});
});