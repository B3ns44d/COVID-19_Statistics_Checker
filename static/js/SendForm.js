// .validate (https://jqueryvalidation.org)
// .post (https://api.jquery.com/jQuery.post/)
// reCaptcha v3 (https://developers.google.com/recaptcha/docs/v3)
// @author Raspgot

const publicKey = "6Lc9D94ZAAAAAE9w6tDGdOvxv-bhnpRMbhf1K6eF"; // GOOGLE public key

// Get token from API
function check_grecaptcha() {
    grecaptcha.ready(function() {
        grecaptcha.execute(publicKey, {
            action: "ajaxForm"
        }).then(function(token) {
            $("[name='recaptcha-token']").val(token);
        });
    });
}

// Show response in .toast
function toastShowing(response) {
    $(".toast-body").html(JSON.parse(response));
    $(".toast").toast('show');
}

$(function() {
    check_grecaptcha();
    $("#contact-form").validate({
        // Form fields rules
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            number: {
                required: true,
                number: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 3
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        // Error messages
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: "Must be at least 3 characters long."
            },
            number: "Please enter a valid phone number.",
            email: "Please enter a valid email.",
            subject: 'Please enter your subject',
            message: {
                required: "Please enter your message.",
                minlength: "Must be at least 5 characters long."
            }
        },
        errorClass: "invalid-feedback",
        // Dynamic validation classes
        highlight: function(element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        // Action on submit
        submitHandler: function(form) {
            $(".spinner-border").removeClass("d-none");
            $("#sendtext").addClass("d-none");
            $.post(form.action, $(form).serialize())
                .done(function(response) {
                    toastShowing((response));
                    $(".spinner-border").addClass("d-none");
                    $("#sendtext").removeClass("d-none");
                    $("#submit-btn").prop("disabled", true);
                    check_grecaptcha();
                    setTimeout(function() {
                        $("#submit-btn").prop("disabled", false);
                        $("form").trigger("reset");
                        $("form").each(function() {
                            $(this).find(".form-control").removeClass("is-valid")
                        })
                    }, 3000);
                })
                .fail(function(response) {
                    toastShowing((response));
                    $(".spinner-border").addClass("d-none");
                    $("#sendtext").removeClass("d-none");
                });
        }
    });
});
