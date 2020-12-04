var minttube = `
<div class="project">

<div >
<div style="text-align:center;">
    <h2>Minttube</h2>
    <h5>Featured Project</h5>
    <div class='col-12 project_img'>
<a href='https://www.minttube.net'>
    <div class='img'>
        <img class='img-fluid' src='images/project/minttube.png' alt=''>
    </div>
</a>
</div>
    <p class='project_description_right'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec viverra
        nisl. Etiam convallis massa risus, sit amet imperdiet sapien pellentesque
        at.
        Suspendisse potenti. </p>
</div>
<div>
    Django
</div>
</div>
</div>
`


jQuery(window).resize(function () {

    var windowsize = jQuery(window).width();
    if (windowsize < 991) {
        $('.project .project_right').replaceWith(minttube);
    } else {
    }
});

