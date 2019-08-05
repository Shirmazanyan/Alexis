$(document).ready(function() {
    console.log( "ready!" );


     

     $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoPlay: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
     /*var block = document.getElementById("response-menu");
     var a=0
     block.onmousemove = function() {
        a++;
        this.style.width = 250 + a+'px' ;

     }*/
     $( "#response-menu" ).click(function() {
        $(".hiden-block").fadeIn();
        $("#response-menu").css({"z-index": 3});
          $( this ).animate({
            width: "700"
          }, 5000, function() {
            // Animation complete.
          });
        });
     $("#rotator div").click(function() {
    current = this.id.substr(6);            
    rotate();
});
});

function rotate() {
                
    if (current == 1) {
        $("#block-1").removeClass().addClass("active");
        $("#block-2").removeClass().addClass("non-active-top");
        $("#block-3").removeClass().addClass("non-active-bottom");
    } else if (current == 2) {
        $("#block-1").removeClass().addClass("non-active-bottom");
        $("#block-2").removeClass().addClass("active");
        $("#block-3").removeClass().addClass("non-active-top");
    } else {
        $("#block-1").removeClass().addClass("non-active-top");
        $("#block-2").removeClass().addClass("non-active-bottom");
        $("#block-3").removeClass().addClass("active");
    }

}

$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


var $slider = document.getElementById('slider');
var $toggle = document.getElementById('toggle');

$toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('slide-in');

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});



$(".btn_open").click(function(){
    $(".card-body").toggle();
});









