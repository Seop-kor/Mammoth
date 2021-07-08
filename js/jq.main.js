$(function(){
  // Mega Box Menu Show and Hide When Hovering Navigation
  $(".topnav, .hidden_sub").on("mouseenter", function(){
    $(".hidden_sub").css({display:"block"});
    $(".topnav li a").css({color:"#000"});
    $(".hidden_sub").stop().animate({height:"485px"}, 300);
  });

  $(".topnav, .hidden_sub").on("mouseleave", function(){
    $(".hidden_sub").stop().animate({height:0}, 300, function(){
      $(".topnav li a").css({color:"#fff"});
      $(".hidden_sub").css({display:"none"});
    });   
  });   

  // Sub Mega Box Menu Hide and Show
  $(".topnav li").on("mouseenter", function(){
    const i = $(this).index();
    $(".subnav_box").hide();
    $(".subnav_box").eq(i).show();
  });

  // Mobile Menu Animation Effect
  $(".menu_ico").hover(function(){
    $(this).toggleClass('active');
  });

  //Mobile Menu Click Effect
  $(".menu_ico").click(function(){
    $(".mobile_nav").animate({left:0}, 300);
    $("section").animate({left:'60%'}, 300);
    $(".overlay").animate({
      "opacity":0.7,
      "left": "60%",
      "width":"100%"
    }, 300);
  });   

  $(".close_btn, .overlay").click(function(){
    $(".mobile_nav").animate({left:'-60%'}, 300);
    $("section").animate({left:0}, 300);
    $(".overlay").animate({
      "opacity":0,
      "left": 0,
      "width":0
    }, 300);
  });

  // Mobile Menu Accordion Effect
  $(".mobile_tit").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).siblings(".mobile_sub_nav").slideUp(200);
      $(this).removeClass("rotate");
      $(".mobile_tit").removeClass("rotate");
    } else {
      $(".mobile_tit").removeClass("active");
      $(".mobile_tit").removeClass("rotate");
      $(this).addClass("active");
      $(".mobile_sub_nav").slideUp(200);
      $(this).siblings(".mobile_sub_nav").slideDown(200);
      $(this).addClass("rotate");   
    }
  });
  
});

// $(document).ready(function(){});