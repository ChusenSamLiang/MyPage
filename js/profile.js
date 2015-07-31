
var action = "show";

$("#profile .details .topic .main").on("click", viewProfile);

function viewProfile() {
    if(action == "show") {
        $("#profile .details .topic .main").css("background-color","red");
        $("#profile .details .topic .main").css("left","0px");
        $('#profile .details .subtopic').show();
        $('#profile .details .subtopic').css("width","55%");
        $('#profile .details .topic').css("width","45%");
        action = "hide";
    }
    else{
        $("#profile .details .topic .main").css("background-color","yellow");
        $("#profile .details .topic .main").css("left","100px");
        $('#profile .details .subtopic').hide();
        action = "show";
    }
}

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


var action = "show";

$("#profile .details .topic .main").on("click", viewProfile);

function viewProfile() {
    if(action == "show") {
        $("#profile .details .topic .main").css("background-color","red");
        $("#profile .details .topic .main").css("left","0px");
        $('#profile .details .subtopic').show();
        $('#profile .details .subtopic').css("width","55%");
        $('#profile .details .topic').css("width","45%");
        action = "hide";
    }
    else{
        $("#profile .details .topic .main").css("background-color","yellow");
        $("#profile .details .topic .main").css("left","100px");
        $('#profile .details .subtopic').hide();
        action = "show";
    }
}

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


/*
Circle
*/

// var pos = $('#contact').position(),
//     radiusSat = $('.media1').width() * 0.5,
//     radius = $('#contact').width() * 0.5,
//     cx = pos.left + radius,
//     cy = pos.top + radius,
//     x, y, angle = 0, angles = [],
//     spc = 360 / 5,
//     deg2rad = Math.PI / 180,
//     i = 0;

// for(;i < 5; i++) {
//     angles.push(angle);
//     angle += spc;
// }

// /// space out radius
// radius += (radiusSat + 10);

// loop();

// function loop() {

//     for(var i = 0; i < angles.length; i++) {

//         angle = angles[i];
        
//         x = cx + radius * Math.cos(angle * deg2rad);
//         y = cy + radius * Math.sin(angle * deg2rad);

//         $('media' + i).css({left:x - radiusSat, top:y - radiusSat});
    
//         angles[i] = angles[i] + 1;
//         if (angles[i] > 360) angles[i] = 0;
//     }
    
//     requestAnimationFrame(loop);
// }

var pos = $('#contact .center').position(),
    radiusSat = $('#contact .media1').width() * 0.4,
    radius = $('#contact .center').width() * 0.4,
    cx = pos.left + 75,
    cy = pos.top + 75,
    x, y, angle = 0, angles = [],
    spc = 360 / 5,
    deg2rad = Math.PI / 180,
    i = 0;

for(;i < 5; i++) {
    angles.push(angle);
    angle += spc;
}

/// space out radius
radius += (radiusSat + 10);

loop();

function loop() {

    for(var i = 0; i < angles.length; i++) {

        angle = angles[i];
        
        x = cx + radius * Math.cos(angle * deg2rad);
        y = cy + radius * Math.sin(angle * deg2rad);

        $('#contact .media' + i).css({left:x - radiusSat, top:y - radiusSat});
    
        angles[i] = angles[i] + 1;
        if (angles[i] > 360) angles[i] = 0;
    }
    
    requestAnimationFrame(loop);
}