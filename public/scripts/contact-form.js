$("#contact-form").submit(function (e) {
    e.preventDefault();

    var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (isFormValid()) {
        var formData = new FormData(this);

        $.ajax({
            url: 'process.php',
            type: 'POST',
            data: formData,
            success: function (data) {
                $('#myModal').modal();
                $('input[name=name]').css('border', '1px solid #ccc');
                $('input[name=email]').css('border', '1px solid #ccc');
                $('textarea[name=message]').css('border', '1px solid #ccc');

                $('input[name=name]').val('');
                $('input[name=email]').val('');
                $('textarea[name=message]').val('');
            },
            cache: false,
            contentType: false,
            processData: false
        }).done(function (data) {

        }).fail(function (data) {

        });
    }

    function isFormValid() {
        var validName = true;
        var validEmail = true;
        var validMessage = true;

        var name = $('input[name=name]').val();
        if (name == null || name === '') {
            $('input[name=name]').css('border', '1px solid #f00');
            validName = false;
        } else {
            $('input[name=name]').css('border', '1px solid #ccc');
        }

        var email = $('input[name=email]').val();
        if (!EMAIL_REGEX.test(email) || email == null || email === '') {
            $('input[name=email]').css('border', '1px solid #f00');
            validEmail = false;
        } else {
            $('input[name=email]').css('border', '1px solid #ccc');
        }

        var message = $('textarea[name=message]').val();
        if (message == null || message === '') {
            $('textarea[name=message]').css('border', '1px solid #f00');
            validMessage = false;
        } else {
            $('textarea[name=message]').css('border', '1px solid #ccc');
        }

        console.log(validName && validEmail && validMessage);
        return validName && validEmail && validMessage;
    }
});