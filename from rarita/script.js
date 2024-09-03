const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting immediately

    if (validateInputs()) { // If all inputs are valid
        console.log('Username:', username.value);
        console.log('Email:', email.value);
        console.log('Password:', password.value); // Not recommended to log sensitive info like passwords
        alert('Form submitted successfully!');
    }
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let isValid = true;

    if (usernameValue === '') {
        setErrorFor(username, 'Username กรุณากรอกข้อมูล.');
        isValid = false;
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email กรุณากรอกข้อมูล.');
        isValid = false;
    } else if (!isEmailValid(emailValue)) {
        setErrorFor(email, 'กรุณากรอกที่อยู่อีเมล์ที่ถูกต้อง');
        isValid = false;
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password กรุณากรอกข้อมูล.');
        isValid = false;
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Confirm Password กรุณากรอกข้อมูล.');
        isValid = false;
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
        isValid = false;
        alert('Passwords do not match!');
    } else {
        setSuccessFor(password2);
    }

    return isValid; // Return true if all fields are valid
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
    input.style.borderColor = 'red';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.visibility = 'hidden';
    input.style.borderColor = 'green';
}

function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}