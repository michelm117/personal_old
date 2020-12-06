screenTooSmall = 0;
var allElementsToReset = [$(".project-overline"),
$(".project-title"),
$(".project-description"),
$(".project-informations"),
$(".project-image")];

jQuery(window).resize(function () {
    var windowsize = jQuery(window).width();
    if (windowsize >= 990) {
        screenTooSmall = false;
    } else {
        screenTooSmall = true;
    }
});

$(function () {
    boxRollovers();
});

$(document).ready(function () {
    var windowsize = jQuery(window).width();
    console.log(windowsize);
    if (windowsize > 976) {
        screenTooSmall = false;
    } else {
        screenTooSmall = true;
    }

    if (screenTooSmall) {
        var image = $(this).children('.project-image').children('a').children('img');
        image.css({ 'filter': 'none', '-webkit-filter': 'none' });

        var content = $(this).children('.project-content');
        content.css({ 'filter': 'alpha(opacity=0)', 'opacity': '0' });
    }
});

function boxRollovers() {
    $selector = $(".project-card");
    XAngle = 0;
    YAngle = 0;

    $selector.on("mousemove", function (e) {
        var $this = $(this);
        var XRel = e.pageX - $this.offset().left;
        var YRel = e.pageY - $this.offset().top;
        var width = $this.width();

        YAngle = -(0.5 - (XRel / width)) * 5;
        XAngle = (0.5 - (YRel / width)) * 5;
        if (!screenTooSmall) {
            updateView($this.children(".project-image"), 50);
            console.log($this.children());

            updateView($this.children(".project-content").children(), 10);
        }
    });

    $selector.on("mouseleave", function () {
        $.each(allElementsToReset, function (index, value) {
            oLayer = value;
            oLayer.css({ "transform": "perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)", "transition": "all 150ms linear 0s", "-webkit-transition": "all 150ms linear 0s" });
            oLayer.find("strong").css({ "transform": "perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)", "transition": "all 150ms linear 0s", "-webkit-transition": "all 150ms linear 0s" });

        });
    });
}

function updateView(oLayer, z) {
    oLayer.css({ "transform": "perspective(525px) translateZ(" + z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)", "transition": "none", "-webkit-transition": "none" });
    oLayer.find("strong").css({ "transform": "perspective(525px) translateZ(" + z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)", "transition": "none", "-webkit-transition": "none" });
}

// Hover over Image on md-screens to see content.
var showContent = false;
$('.project-card').hover(function () {
    if (screenTooSmall && !showContent) {
        var image = $(this).children('.project-image').children('a').children('img');
        image.css({ 'filter': 'brightness(0.3) saturate(100%) blur(4px)', '-webkit-filter': 'brightness(0.3) saturate(100%) blur(4px)' });

        var content = $(this).children('.project-content');
        content.css({ 'filter': 'alpha(opacity=100)', 'opacity': '100' })
    }
}, function () {
    showContent = false;

    if (screenTooSmall) {
        var image = $(this).children('.project-image').children('a').children('img');
        image.css({ 'filter': 'none', '-webkit-filter': 'none' });

        var content = $(this).children('.project-content');
        content.css({ 'filter': 'alpha(opacity=0)', 'opacity': '0' });
    }
});