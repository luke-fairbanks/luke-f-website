const faders = document.querySelectorAll('.fade-in')

function whichAnimationEvent(){
    var t,
        el = document.createElement("fakeelement");
  
    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }
  
    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }
  
  var animationEvent = whichAnimationEvent();

function pageScroll(){
    window.scroll({
        top: 750,
        left: 00,
        behavior: 'smooth'
    });
    $('body, html').css('overflow','visible');
    //document.querySelector(".type-writer-intro h1").classList.add("type")

    //add the type to the text
    $(".option1").addClass("type");
    //for multiple lines, wait until the first animation is finished
    $(".line1").addClass("type-line1");
    $(".line1").one(animationEvent,
      function(event) {
        $(".type-line1").css("border-right", "transparent;")
        $(".line2").addClass("type-line2");
      });

    /* SCROLL WHEN FINISHED
    $(".type-writer-intro h1").one(animationEvent,
                function(event) {
        window.scroll({
            top: 1250,
            left: 00,
            behavior: "smooth"
        });
    });*/
}

//Random background pic each load
$(document).ready(function(){
    var images = ['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg'];
    var image = images[Math.floor(Math.random() * images.length)]
    if(image == 'pic1.jpeg'){
      document.getElementById("welcome-header").style.color = '#343434';
      document.getElementById("taskbar-name").style.color = '#343434';
    }else if(image == 'pic2.jpeg'){
        document.getElementById("welcome-header").style.color = '#b9ffe4';
        document.getElementById("taskbar-name").style.color = '#b9ffe4';
    }else if(image == 'pic3.jpeg'){
      document.getElementById('welcome-header').classList.add('gradient')
      document.getElementById('taskbar-name').classList.add('gradient')
    }else if(image == 'pic4.jpeg'){
      document.getElementById("welcome-header").style.color = '#E6E6FA	';
      document.getElementById("taskbar-name").style.color = '#343434';
    };
    $('.welcome-head-wrapper').css({'background-image': 'url(images/' + image + ')'});
  

});

//If reloading, allow scroll
/*if (performance.type == performance.TYPE_RELOAD) {
    $('body, html').css('overflow','visible');
  } else {
    console.info( "This page is not reloaded");
  }*/

//if loading and touching the top of the screen, lock the screen
$(document).ready(function() {
  if (window.scrollY==0){
    $('body, html').css('overflow','hidden');
  } else {
    $('body, html').css('overflow','visible');
  }
})

//Items appear on scroll
const appearOptions = {
  /*threshold: 1,
  rootMargin: "0px 0px -100px 0px"*/
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})