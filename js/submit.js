$('.submit-btn').click('submit', function (e) {
    e.preventDefault(); //this stops the form submit + refresh 

    $.ajax({
        data: { name: $('#name').val(), mail: $('#email').val(), message: $('#message').val() },
        type: 'POST',
        url: './php/contactform.php',
        success: function (data) {
            $('.success-message').removeClass('hidden');
            $('.submit-btn').prop("disabled", true);
            $('.submit-btn').css("background", "#474559");
            console.log(data);
        },
        error: function (data) { 
            $('.submit-btn').css("background", "#474559"); 
            $('.submit-btn').prop("disabled", true); 
            alert('Message could not be send. Please write an email to mail@marcmichel.dev.'); 
            console.log(data);
        }
    });
});