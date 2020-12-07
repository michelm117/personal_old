function indicateError(field) {
    $(field).css("border", "1px solid red");
    $(field).addClass("error");
    setTimeout(function () {
        $(field).removeClass('error');
    }, 600);
}

$('.submit-btn').click('submit', function (e) {
    e.preventDefault(); //this stops the form submit + refresh 
    //$('.success-message').removeClass('hidden');

    var inputFields = ['#nameField', '#mailField', '#messageField'];

    // Add error class if necessary.
    var errorOccured = false;
    $.each(inputFields, function (index, field) {
        // CHeck if input fields are empty
        if (!$(field).val()) {
            errorOccured = true;
            indicateError(field);
        } else {
            $(field).css("border", "1px solid #ced4da");
        }
    });

    // validate email
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    var userMail = $('#mailField').val();
    if (!pattern.test(userMail)) {
        indicateError('#mailField');
        errorOccured = true;
    } else {
        $('#mailField').css("border", "1px solid #ced4da");
    }


    if (errorOccured) {
        return;
    }

    $.ajax({
        data: { name: $('#name').val(), mail: $('#email').val(), message: $('#message').val() },
        type: 'POST',
        url: './php/contactform.php',
        success: function (data) {
            $('.success-message').removeClass('hidden');
            $('.error-message').addClass('hidden');

            $('.submit-btn').prop("disabled", true);
            $('.submit-btn').css("background", "#474559");
            console.log(data);
        },
        error: function (data) {
            $('.submit-btn').css("background", "#474559");
            $('.error-message').removeClass('hidden');
            $('.submit-btn').prop("disabled", true);
            console.log(data);
        }
    });
});