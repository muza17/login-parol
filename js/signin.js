// sign in
//global variables
var storage = window.localStorage;
var form = document.querySelector(".signin__form");
var users = JSON.parse(window.localStorage.getItem("users")) ?? [];
console.log(users);

//functions
//eventlisteners
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    console.log("hii");
    
    //variables
    var username = document.getElementById("username").value.trim();
    var password  = document.getElementById("password").value.trim();
    var usernameError = document.querySelector("#usernameError");
    var passwordError = document.querySelector("#passwordError");
    var success = document.querySelector(".signin__text");
    
    let foundedusername = users.find(user => user.username == username);
    let foundedpassword = users.find(user =>user.password == password);
    
    if(foundedusername && foundedpassword){
        success.textContent = "You are signed in. Welcome :)";
        usernameError.textContent = "";
        passwordError.textContent = "";
    }else if(!foundedpassword){
        passwordError.textContent = "Wrong password";
        usernameError.textContent = "";
        success.textContent = "";
    }else if(!foundedusername){
        usernameError.textContent = "Wrong username";
        passwordError.textContent = "";
        success.textContent = "";
    }else if(!foundedusername && !foundedpassword){
        usernameError.textContent = "Wrong username";
        passwordError.textContent = "Wrong password";
        success.textContent = "You can't log in. Try again";
    }
});

document.getElementById("username").value = "";
document.getElementById("password").value = "";


