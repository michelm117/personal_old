var allElementsToReset = [$(".project-overline"),
$(".project-title"),
$(".project-description"),
$(".project-informations"),
$(".project-image")];


$(function () {
    boxRollovers();
});

var screenTooSmall;
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


/* ----------------------------------------------/
/ Hover over Image on md-screens to see content. /
/-----------------------------------------------*/
var winWidth;
var showContent = false;
$(document).ready(function () {
    winWidth = jQuery(window).width();
    checkIfScreenTooSmall();
});

function checkIfScreenTooSmall() {
    if (winWidth >= 972) {
        screenTooSmall = false;
        showImageAndContent($('.project-card'));
    } else {
        screenTooSmall = true;
        showImageHideContent($('.project-card'));
    }
};

// On window resize
$(window).on('resize', function () {
    winWidth = $(this).width();
    checkIfScreenTooSmall(winWidth);
});

// Hover over Image
$('.project-card').hover(function () {
    if (screenTooSmall) {
        blurImageShowContent($(this));
    }
}, function () {
    if (screenTooSmall) {
        showImageHideContent($(this));
    }
});

function showImageHideContent(project_card) {
    var image = project_card.children('.project-image').children('a').children('img');
    image.css({ 'filter': 'none', '-webkit-filter': 'none' });
    var content = project_card.children('.project-content');
    content.css({ 'filter': 'alpha(opacity=0)', 'opacity': '0' });
};

function showImageAndContent(project_card) {
    var image = project_card.children('.project-image').children('a').children('img');
    image.css({ 'filter': 'none', '-webkit-filter': 'none' });
    var content = project_card.children('.project-content');
    content.css({ 'filter': 'alpha(opacity=100)', 'opacity': '100' });
};

function blurImageShowContent(project_card) {
    var image = project_card.children('.project-image').children('a').children('img');
    image.css({ 'filter': 'brightness(0.3) saturate(100%) blur(4px)', '-webkit-filter': 'brightness(0.3) saturate(100%) blur(4px)' });
    var content = project_card.children('.project-content');
    content.css({ 'filter': 'alpha(opacity=100)', 'opacity': '100' });
};

