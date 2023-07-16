var user = [];
user = JSON.parse(localStorage.getItem('user'))

var singInEmail = document.getElementById('signEmail');
var signInPassword = document.getElementById('signPassword');




document.getElementById('login').addEventListener('click', function () {
    if (singInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('messagee').innerHTML = `<p class ='text-center'>All inputs is required</p>`;
    } else {
        checkUser();
    }
})


function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (singInEmail.value == user[i].signemail && signInPassword.value == user[i].signpass) {
            var y = user[i].signname;
            localStorage.setItem('userName', y);
            location.href = 'index.html';
            break;
        }
    }
}