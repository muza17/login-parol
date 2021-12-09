// sign in
var storage = window.localStorage;
var form = document.querySelector(".signin__form");
var users = JSON.parse(window.localStorage.getItem("users")) ?? [];
console.log(users);

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
    
    if(!foundedusername){
        usernameError.textContent = "Wrong username";
    }else if(!foundedpassword){
        passwordError.textContent = "Wrong password";
    }else if(foundedusername && foundedpassword){
        success.textContent = "You are signed in. Welcome :)"
    }
});


//functions
























//function signIn(e){
//     event.preventDefault();
//     console.log("hii");

//     //variables
//     var username = document.querySelector("#username").value;
//     var email = document.querySelector("#emailadress").value;
//     var password  = document.querySelector("#password").value;
    
//     var usernameError = document.querySelector("#usernameError");
//     var passwordError = document.querySelector("#passwordError");
//     var success2 = document.querySelector(".registration__text2");

//     var user = storage.getItem(username);
//     var userData = JSON.parse(user);

//     if(user == null){
//         usernameError.innerHTML = "Wrong username!";
//     }else if(username == userData.username && password == userData.password){
//         success2.innerHTML = "You are signed in. Welcome :)";
//     }else{
//         password.innerHTML = "Wrong password!";
//     }
// };