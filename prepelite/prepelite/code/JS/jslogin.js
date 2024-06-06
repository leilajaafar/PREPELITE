var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

email.addEventListener('input', email_Verify);
password.addEventListener('input', password_Verify);

function Validation() {
    if (email.value === 'chahdhattab@gmail.com' && password.value === 'mdp123') {
        showAlert("Formulaire soumis avec succès !", false);
        setTimeout(function() {
            window.location.href = 'DashboardHome.html';
        }, 2000);
        return false; // pour empêcher l'envoi du formulaire
    }
    if (email.value === 'asmaeelmezouari@gmail.com' && password.value === 'mdp111') {
        showAlert("Formulaire soumis avec succès !", false);
        setTimeout(function() {
            window.location.href = 'admindashboardprofile.html';
        }, 2000);
        return false; // pour empêcher l'envoi du formulaire
    }
    showAlert("L'email ou le mot de passe est incorrect.", true);
    return false;
}

function email_Verify() {
    email.style.border = "1px solid black";
}

function password_Verify() {
    password.style.border = "1px solid black";
}

function showAlert(message, isError) {
    var modal = document.getElementById('alertModal');
    var alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    if (isError) {
        alertMessage.style.color = 'red';
    } else {
        alertMessage.style.color = 'green';
    }
    modal.style.display = 'block';
}

var modal = document.getElementById('alertModal');
var closeBtn = document.getElementsByClassName('close-btn')[0];

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
