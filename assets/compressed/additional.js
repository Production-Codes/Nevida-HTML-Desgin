$(document).ready(function () {

    // Assign a variable for the application being used
    var nVer = navigator.appVersion;
    // Assign a variable for the device being used
    var nAgt = navigator.userAgent;
    var nameOffset, verOffset, ix;


    // First check to see if the platform is an iPhone or iPod
    if (navigator.platform == 'iPhone' || navigator.platform == 'iPod') {
        // In Safari, the true version is after "Safari"
        if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            // Set a variable to use later
            var mobileSafari = 'Safari';
        }
    }

    // If is mobile Safari set window height +60
    if (mobileSafari == 'Safari') {
        // Height + 60px
        $('header.header').css('height', (($(window).height())) + 'px');
    }
    // } else {
    //     // Else use the default window height
    //     $('header.header').css({'height':(($(window).height()))+'px'});
    // };
    if (window.matchMedia("(max-width: 768px)").matches) {
        $("#navbar").appendTo("nav.navbar");
    }

    if ($(".layout-1").length) {
        if (window.matchMedia("(max-width: 768px)").matches) {
//            $('header.header .embed-container').remove();
            $('#bg-video').hide();
            if (!(navigator.platform == 'iPhone' || navigator.platform == 'iPod')) {
                $('.image-overlay').append($('<div class="vplay"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="90" height="90" viewBox="0 0 32 32">'+
                        '<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z"></path>'+
                        '</svg></div>'));
                $('headerheader.header').click(function () {
                    $('#bg-video').show();
                    $('header.header .backimg').hide();
                    $('header.header').find('.image-overlay').hide();
                    videojs('bg-video').Background({
                                                       volume: '0',
                                                       mediaType: 'html5',
                                                       autoPlay: 'true',
                                                       muted: true
                                                   });
                    //                videojs('bg-video').play()
                });
            };
        } else{
            $('header.header .backimg').hide();

            $('header.header').find('.image-overlay').hide();
            videojs('bg-video').Background({
                                               volume: '0',
                                               mediaType: 'html5',
                                               autoPlay: true,
                                               muted: true
                                           });
        }
    } else{
        if (!($('header.header .backimg').length)) {
            $('header.header').css('height','auto').css('min-height','75px');
        }
    }
});

// Nav close and open for desktop

$(document).ready(function () {
    $('.nav-slide').click(function () {
        $(this).toggleClass('active');
        $('.icon-expander').toggleClass('active not-active');
        $('#nav-close').toggleClass('active not-active');
    });
});


// Nav close and open for mobile
$(document).ready(function () {
    $('.mobile-navigation').click(function () {
        $(this).toggleClass('active');
        $('.menu-toggle').toggleClass('active not-active');
        $('#mobile-nav-close').toggleClass('active not-active');
    });
});


// Mobile arrows up and down
$(document).ready(function () {
    $('a span.mobile-arrow').click(function () {
        $(this).toggleClass('active');
        $('.nav-arrow').toggleClass('active not-active');
        $('.up-nav-arrow').toggleClass('active not-active');
    });
//

});


// Adding active to menu items
$("ul.nav li a").filter(function () {
    return this.href == location.href.replace(/#.*/, "");
}).addClass("active");

var delay = 2;
var hidefor = 14;

$(document).ready(function () {
    if ($('#popup').length) {
        onPageLoadCheck();
    }
})

function onPageLoadCheck() {
    if (readCookie('startBrowsing')) {
        if (!readCookie('modalShowed')) {
            checkCookieTime();
        }
    } else {
        var date = new Date();
        createCookie('startBrowsing',date.getTime(),hidefor);
        checkCookieTime();
    }
}

function checkCookieTime() {
    var date = new Date();
    date = date.getTime();
    var cdate = readCookie('startBrowsing');

    if ((date - cdate)>(delay*1000)){
        $('#popup').modal('show');
        if (hidefor) {
            createCookie('modalShowed', true, hidefor);
        }
    } else {
        setTimeout(function () {
            checkCookieTime()
        }, delay);
    }
}


//$(document).ready(function () {
//    $('button.menu-toggle').click(function () {
//        $(this).closest('nav').toggleClass('expanded');
//    });
//});


// Slide in menu - commented out for slide in slide out effect
//$(document).ready(function () {
//    $('[data-slide="slide"]').click(function (e) {
//        var $this = $(this);
//        var target = $this.attr('data-target');
//        var $target = $(target);
//        $(target).toggleClass('slide-in');
//        $(this).toggleClass('active');
//        e.preventDefault();
//    });
//});


// Case Study template
// Open and close project details
$('.project-details').click(function () {
    $(this).toggleClass('active');
    $('.project-open').addClass('active');
    $('.project-close').addClass('active');
});

$('.project-close').click(function () {
    $(this).toggleClass('active');
    $('.project-open').removeClass('active');
    $('.project-details').addClass('active');
});


// Smooth scroll to anchor
var $root = $('body');
$('.down-arrow > a').click(function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        var navheight = 67;
    } else{
        var navheight = 75;
    }
    if (location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - navheight
            }, 500);
            return false;
        }
    }
});


// Responsive Gallery
// Force bootstrap carousel to show multiple items at a time
$(document).ready(function () {
    var carouselPageMerger = new SocialbitBootstrapCarouselPageMerger();

    carouselPageMerger.setSettings({
        spaceCalculationFactor: 1,
        useWidthOfFirstElement: true,
        interval: 5000,
        watchWindowSizeTimeout: 100
    });

    carouselPageMerger.run('div.multiple');

});


// Carousel - move one at a time instead of 3
$('.multiple .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {

        next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');

    }
    else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));

    }
});


// Add touch swipe to slideshow and carousel
//$(document).ready(function () {
//    $('.carousel').hammer().on('swipeleft', function () {
//        $(this).carousel('next');
//    })
//    $('.carousel').hammer().on('swiperight', function () {
//        $(this).carousel('prev');
//    })
//});


// Bootstrap dropdown menu
// when it's open, enable the second click/tap to navigate to the page
$('.dropdown a.dropdown-toggle').on('click', function () {
    if (
        $(this).parent().hasClass('open') && $(this).hasClass('isClickable')
    ) {
        location.assign($(this).attr('href'));
    }
});


// Load vimeo video inside modal only if modal class is present on page
if ($('#myModal').length > 0) {

    var iframe = $('#myModal').find('iframe')[0];
    // var $f = Froogaloop;
    var player = new Vimeo.Player(iframe);

    $('#myModal').on('hidden.bs.modal', function () {
        player.pause();
        // console.log('pause');
    });

    $('#myModal').on('shown.bs.modal', function () {
        // player.play();
        // console.log('play');
    });

}


// Navigation slide in slide out

$(".icon-expander,#nav-close").click(function () {
    // Set the effect type
    var effect = 'slide';
    // Set the options for the effect type chosen
    var options = {direction: 'right'};
    // Set the duration (default: 400 milliseconds)
    var duration = 700;
    $('#navbar .navbar-nav').toggle(effect, options, duration);
});


// Mobile navigation slide down and up
$(".menu-toggle,#mobile-nav-close").click(function () {
    // Set the effect type
    var effect = 'slide';
    // Set the options for the effect type chosen
    var options = {direction: 'up'};
    // Set the duration (default: 400 milliseconds)
    var duration = 700;
    $('#navbar .navbar-nav').toggle(effect, options, duration);
});


// Remove slider navigation buttons from project details page
$(".projectoverview-button").click(function () {
    $(".carousel-control").toggleClass('hidecontrols');
    return false;
});


// Contact page hover boxes
$(".pressenquiries .hoverbox-overlay").click(function () {
    $(".pressenquriestoggle").addClass('visiblecontactbox');
    $(".pressenquiries").find(".hoverbox-overlay").remove();
    return false;
});

$(".newbusiness .hoverbox-overlay").click(function () {
    $(".newbusinesstoggle").addClass('visiblecontactbox');
    $(".newbusiness").find(".hoverbox-overlay").remove();
    return false;
});


function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


