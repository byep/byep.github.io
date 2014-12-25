//_____*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*______SLIDING MENU________*_*_*_*_*_*_*_*_*

var shakemore = 0

$(document).ready(function() {




var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        menuTop = document.getElementById( 'cbp-spmenu-s3' ),
        menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
        showLeft = document.getElementById( 'showLeft' ),
        showRight = document.getElementById( 'showRight' ),
        showTop = document.getElementById( 'showTop' ),
        showBottom = document.getElementById( 'showBottom' ),
        showLeftPush = document.getElementById( 'showLeftPush' ),
        showRightPush = document.getElementById( 'showRightPush' ),
        body = document.body;
 

showTop.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuTop, 'cbp-spmenu-open' );
    disableOther( 'showTop' );
};

 
function disableOther( button ) {
    if( button !== 'showLeft' ) {
        classie.toggle( showLeft, 'disabled' );
    }
    if( button !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
    }
    if( button !== 'showTop' ) {
        classie.toggle( showTop, 'disabled' );
    }
    if( button !== 'showBottom' ) {
        classie.toggle( showBottom, 'disabled' );
    }
    if( button !== 'showLeftPush' ) {
        classie.toggle( showLeftPush, 'disabled' );
    }
    if( button !== 'showRightPush' ) {
        classie.toggle( showRightPush, 'disabled' );
    }
}
   
});

//_____*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*______HIDE ABOUT________*_*_*_*_*_*_*_*_*
$(document).ready(function(){
  
    $(".blurred").hide()
    $(".black_cover").hide();
    $(".about_text").hide();
    $(".blank").hide();
    

  $(".move4").click(function(){
    $(".blurred").fadeToggle("slow", "linear");
    $(".black_cover").fadeToggle("slow", "linear");
    $(".about_text").fadeToggle("slow", "linear");
    // $('.about_text').foggy({blurRadius: 90});
  });

  $(".about_text").click(function(){
    $(".blurred").fadeToggle("slow", "linear");
    $(".black_cover").fadeToggle("slow", "linear");
    $(".about_text").fadeToggle("slow", "linear");
    // $('.about_text').foggy({blurRadius: 90});
  });


    $(".blurred").show();
    $(".black_cover").show();
    $(".about_text").show();
    $(".blank").show();

$(".blank").click(function(){
    $(".blurred").fadeOut("slow", "linear");
    $(".black_cover").fadeOut("slow", "linear");
    $(".about_text").fadeOut("slow", "linear");
    $( ".blank" ).detach();
    });

$(".move2").click(function(){
    $(".blurred").fadeOut("slow", "linear");
    $(".black_cover").fadeOut("slow", "linear");
    $(".about_text").fadeOut("slow", "linear");
    $( ".blank" ).detach();
    });

});




