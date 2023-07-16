//sign up
var namee = document.getElementById("signName");
var email = document.getElementById("signEmail");
var password = document.getElementById("signPassword");
var user =[];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
} else {
    user = [];
}


function add(){
if(email.value =='' ||password.value =='' || namee.value ==''){
document.getElementById("message").innerHTML=`<p class="text-center"> All inputs are required</p>`
}else{
    var obj={
        signname: namee.value,
        signemail: email.value,
        signpass: password.value
    }
    user.push(obj);
    location.href = "login.html";
    localStorage.setItem('user' ,JSON.stringify(user));
}


}

