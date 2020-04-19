// SLIDER AREA ===========

$(document).ready(function() {
 
$("#owl-demo").owlCarousel({
 
navigation : false, // Show next and prev buttons
 
slideSpeed : 600,
paginationSpeed : 600,
 
items : 1, 
itemsDesktop : false,
itemsDesktopSmall : false,
itemsTablet: false,
itemsMobile : false,
autoPlay: true
});
    
});

// MIXITUP JS =========

$(document).ready(function(){
    var mixer = mixitup('.perves');
});

// TYPED JS ===========
$(document).ready(function(){
    var typed3 = new Typed('.type', {
    strings: ['Kerri Deo...', 'A Photographer.', 'A Web Designer.'],
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true, // this is a default
    loop: true,
    cursorChar: ''
  });
});
// SMOOTH SCROLL

$(function(){
    $('nav ul li a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        
        return false;
    });
});
// STICKY MENU

$(window).on('scroll', function(){
    if($(window).scrollTop()){
            $('nav').addClass('sticky');
       }
       else {
            $('nav').removeClass('sticky');
       }
});
// HAMBURGER MENU

function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}

function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}
