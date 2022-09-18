console.log("auth loaded");

// let sendData(value) {

// }

let loginUser = ()=>{
    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;

    document.getElementById("login-fail-nouser").style.display = "none"
    document.getElementById("login-fail-password").style.display = "none"

}

let signUpUser = ()=> {
    console.log("signup called");
    document.getElementById("create-used").style.display = "none"
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/createnewuser", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        name: name,
        email: email,
        password: password
}))
console.log(xhr.status);
}

document.getElementById("create-used").style.display = "none"
document.getElementById("signUpBtn").addEventListener("click", signUpUser)
document.getElementById("loginBtn").addEventListener("click", loginUser)
document.getElementById("login-success").style.display = "none"
document.getElementById("login-fail-nouser").style.display = "none"
document.getElementById("login-fail-password").style.display = "none"
document.getElementById("create-success").style.display = "none"