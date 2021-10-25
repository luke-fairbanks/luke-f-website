//top of page 
$(document).ready(function(){
    $(this).scrollTop(0);
});
//handle the loading icon until page loads
$(window).on("load",function(){ 
    $(".loading-wrapper").fadeOut("slow");
    $('body, html').css('overflow','visible');
})