$(document).ready(function() {
    


  // $("img").hover(function(){
  //   $(".background").fadeIn("fast", "linear");
  // });



//___*_*_*_*_*_*______HOVER BACKGROUND________*_*_*_*_*_*_*_*_*

$(".folder_x0y0").bind("mouseenter",function(){
   $.backstretch("images/comraes4.jpg");
   $( ".reset" ).hide();
});

$(".folder_x1y0").bind("mouseenter",function(){
   $.backstretch("images/window_flower8.jpg");
   $( ".reset" ).hide();
});



//___*_*_*_*_*_*______CONTROLS________*_*_*_*_*_*_*_*_*

$( ".reset" ).hide();


$(".reset_command").click(function(){
   $(".reset").show();
});


});




