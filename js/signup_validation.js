$().ready(function(){
    $("#signup_form").validate({
        rules:{
            first_name: "required",
            last_name: "required",
            email:{
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirm_password:{
                required: true,
                equalTo: "#password"
            },
        },
        messages:{
            first_name: "Please enter your first name",
            last_name: "Please enter your last name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your password",
                minlength: "Please enter at least 6 characters"
            },
            confirm_password: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            }
        }
    });
})