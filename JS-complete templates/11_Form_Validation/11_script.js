// Get the Input Elements
var userNameElement = document.querySelector('#username');
var emailElement = document.querySelector('#email');
var passwordElement = document.querySelector('#password');
var confirmPasswordElement = document.querySelector('#password_confirm');

// Get the Error Message Elements
var nameErrorElement = document.querySelector('#name_error');
var emailErrorElement = document.querySelector('#email_error');
var passwordErrorElement = document.querySelector('#password_error');

// Add blur events for UserName Field
userNameElement.addEventListener('blur',function() {
    clearErrorMessage(userNameElement,nameErrorElement);
});
emailElement.addEventListener('blur',function() {
    clearErrorMessage(emailElement,emailErrorElement);
});
passwordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});
confirmPasswordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});


function validate() {
    var isValid = true;
    var message = '';

    // Required UserName Validation
    if(userNameElement.value === ''){
        message = 'UserName is Required';
        displayErrorMessage(userNameElement,nameErrorElement,message);
        isValid = false;
        return isValid;
    }

    // UserName Length validation
    if(userNameElement.value.length < 5){
        message = 'Enter at least 5 letters';
        displayErrorMessage(userNameElement,nameErrorElement,message);
        isValid = false;
        return isValid;
    }

    // Twitter Username Pattern Validation
    if(!(userNameElement.value.match(/^[A-Za-z0-9_]{1,15}$/))){
        message = 'Pattern is NOT matched';
        displayErrorMessage(userNameElement,nameErrorElement,message);
        isValid = false;
        return isValid;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        message = 'Email is Required';
        displayErrorMessage(emailElement,emailErrorElement,message);
        isValid = false;
        return isValid;
    }

    // Required password Validation
    if(passwordElement.value === ''){
        message = 'Password is Required';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isValid = false;
        return isValid;
    }

    // Required Confirm password Validation
    if(confirmPasswordElement.value === ''){
        message = 'Confirm Password is Required';
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        isValid = false;
        return isValid;
    }

    // Passwords match validation
    if(passwordElement.value !== confirmPasswordElement.value){
        message = "Passwords didn't Match";
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isValid = false;
        return isValid;
    }

    if(isValid === false){
        return false;
    }
    else{
        alert('Form Submitted Successfully!!');
        return true;
    }
}

// Display Error Message
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.borderColor = 'red';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// Clear the error Messages
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.borderColor = 'gray';
    inputElement.style.boxShadow = '0 0 0 white';
    errorElement.textContent = '';
}