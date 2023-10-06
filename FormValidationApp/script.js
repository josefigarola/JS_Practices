var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var textError = document.getElementById("text-error");
var submitError = document.getElementById("submit-error");

const checkCircle = '<i class="fa-solid fa-circle-check"></i>'

function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = checkCircle;
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    else if(phone.length > 10){
        phoneError.innerHTML = "Phone number must be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Invalid phone number";
        return false;
    }
    phoneError.innerHTML = checkCircle;
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = checkCircle;
    return true;
}

function validateText(){
    var text = document.getElementById("contact-text").value;
    var required = 30;
    var left = required - text.length

    if(left > 0){
        textError.innerHTML = left + " more characters required";
        return false;
    }

    textError.innerHTML = checkCircle;
    return true;
}

function validateForm(){
    if(validateName() && validatePhone() && validateEmail() && validateText()){
        return true;
    }
    else{
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fill all the fields correctly";
        setTimeout(function(){submitError.style.display = 'none'}, 3000)
        return false;
    }
}