var storage = window.localStorage;
var form = document.querySelector(".registration__form");
var signupBtn= document.querySelector(".registration__form-button1");
var users = JSON.parse(window.localStorage.getItem(users)) ?? [];
console.log(users);

//eventlisteners
form.addEventListener('submit', signUp);
 

function signUp(e){
    e.preventDefault();
    
    console.log("hi");
    
    //variables
    var currentTime = Date.now();
    var username = document.querySelector("#username").value.trim();
    var email = document.querySelector("#emailaddress").value.trim();
    var password  = document.querySelector("#password").value.trim();
    var success1 = document.querySelector(".registration__text1");

    var foundUser = users.find(item => item.email == email || item.username == username);

    if(!foundUser){
        users.push(
            {
                id : currentTime,
                username,
                email,
                password
            }
        )
            success1.textContent= "You are signed up. Welcome :) ";
    } else{
        success1.textContent= "Sorry, this user exists ";
    }

    saveData(users, "users");
    console.log(users);
}
//functions
var saveData = (data, saveDateAs) => {
    window.localStorage.setItem(saveDateAs, JSON.stringify(data))
}
// var getData = (getDateAs) => {
//     JSON.parse(window.localStorage.getItem(getDateAs))
// }

// [
//     {
//         id: 183019,
//         username : "muza",
//         email: "dnk.com",
//         password : 234567
//     }
// ]
