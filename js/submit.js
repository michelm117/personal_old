$('.contact-form').on('submit', function (e) {
    e.preventDefault(); //this stops the form submit + refresh 

    $.ajax({
        data: { name: $('#name').val(), mail: $('#email').val(), message: $('#message').val() },
        type: 'POST',
        url: './php/contactform.php',
        success: function (data) { $('.success-message').removeClass('hidden'); console.log(data) },
        error: function (data) { alert('Message could not be send. Please write an email to <mail@marcmichel.dev>.' + data); console.log(r + " \n " + data) }
    });
});