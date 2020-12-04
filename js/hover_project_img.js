screenTooSmall = 0;

jQuery(window).resize(function () {
    var windowsize = jQuery(window).width();
    if (windowsize >= 991) {
        screenTooSmall = false;
    } else {
        screenTooSmall = true;
    }
});


$(function () {
    boxRollovers();
});

function boxRollovers() {
    $selector = $(".project_container");
    XAngle = 0;
    YAngle = 0;
    Z = 50;

    $selector.on("mousemove", function (e) {
        var $this = $(this);
        var XRel = e.pageX - $this.offset().left;
        var YRel = e.pageY - $this.offset().top;
        var width = $this.width();

        YAngle = -(0.5 - (XRel / width)) * 5;
        XAngle = (0.5 - (YRel / width)) * 5;
        if (!screenTooSmall) {
            updateView($this.children(".project").children());
        }
    });

    $selector.on("mouseleave", function () {
        $(this).children(".project").children().each(function () {
            oLayer = $(this);

            oLayer.css({ "transform": "perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)", "transition": "all 150ms linear 0s", "-webkit-transition": "all 150ms linear 0s" });
            oLayer.find("strong").css({ "transform": "perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)", "transition": "all 150ms linear 0s", "-webkit-transition": "all 150ms linear 0s" });

        });
    });
}

function updateView(oLayer) {
    oLayer.css({ "transform": "perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)", "transition": "none", "-webkit-transition": "none" });
    oLayer.find("strong").css({ "transform": "perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)", "transition": "none", "-webkit-transition": "none" });
}