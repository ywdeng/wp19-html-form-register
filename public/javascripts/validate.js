function validatePassword() {
    var pwdCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var pwd = document.getElementById('thePassword');
    if (!pwdCheck.test(pwd.value)) {
        pwd.setCustomValidity('Password is not good enough');
        pwd.style.backgroundColor = 'Crimson';
        return false;
    }
    pwd.setCustomValidity('');
    pwd.style.backgroundColor = 'LightGreen';
    return true;
}

function confirmPassword() {
    var pwd = document.getElementById('thePassword');
    var pwd2 = document.getElementById('confirmPassword');
    if (pwd.value != pwd2.value) {
        pwd2.setCustomValidity("Passwords Don't Match!");
        pwd2.style.backgroundColor = 'Crimson';
        return false;
    }
    pwd2.setCustomValidity('');
    pwd2.style.backgroundColor = 'LightGreen';
    return true;
}

function validateInput() {
    if (validatePassword() && confirmPassword()) {
        return true;
    }
    var pwd = document.getElementById('thePassword');
    var pwd2 = document.getElementById('confirmPassword');
    pwd2.value = '';
    pwd.select();
    pwd.focus();
    return false;
}

function goHome() {
    document.location = "/";
}
