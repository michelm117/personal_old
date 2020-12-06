$('.contact-form').on('submit', function (e) {
    e.preventDefault(); //this stops the form submit + refresh 

    $.ajax({
        data: { name: $('#name').val(), mail: $('#email').val(), message: $('#message').val() },
        type: 'post',
        url: '../php/contactform.php',
        success: function (r) { $('.success-message').removeClass('hidden') },
        error: function (r) { alert('Message could not be send. Please write an email to <mail@marcmichel.dev>.'); console.log(r) }
    });
});