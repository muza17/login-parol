var storage = window.localStorage;
var form = document.querySelector(".registration__form");
var signupBtn= document.querySelector(".registration__form-button1");
signupBtn.addEventListener('submit', signUp);


function signUp(e){
    e.preventDefault();
    console.log("hi");

    //variables
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#emailaddress").value;
    var password  = document.querySelector("#password").value;
    
    var success1 = document.querySelector(".registration__text1");

    var user = {
        username : username,
        email : email,
        password : password
        
    };
    console.log("olindi");

    
    storage.setItem(username, JSON.stringify(user));
    console.log("user added");
    success1.innerHTML = "You are signed in. Welcome :)";


}


function signIn(e){
    e.preventDefault();
    console.log("hii");

    //variables
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#emailadress").value;
    var password  = document.querySelector("#password").value;
    
    var usernameError = document.querySelector("#usernameError");
    var passwordError = document.querySelector("#passwordError");
    var success2 = document.querySelector(".registration__text2");

    var user = storage.getItem(username);
    var userData = JSON.parse(user);

    if(user == null){
        usernameError.innerHTML = "Wrong username!";
    }else if(username == userData.username && password == userData.password){
        success2.innerHTML = "You are signed in. Welcome :)";
    }else{
        password.innerHTML = "Wrong password!";
    }
};
