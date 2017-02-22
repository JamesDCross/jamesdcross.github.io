/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        /*this is to match @media 768, WARNING: not IE9 compatible*/ 
        if (window.matchMedia('(min-width: 768px)').matches){
        $(".navbar-custom a").css('color', 'black');
        }
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        
        $(".navbar-custom a" ).css('color', 'white');
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

//this is all about getting the page to scroll down when you press a button in the header
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 700, 'easeInOutExpo');//set it to 600 snappier
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});



