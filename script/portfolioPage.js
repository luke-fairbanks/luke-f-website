//handle the loading icon until page loads
$(window).on("load",function(){
    window.scroll({top:0})
    $(".loading-wrapper").fadeOut("slow");
    $('body, html').css('overflow','visible');
})