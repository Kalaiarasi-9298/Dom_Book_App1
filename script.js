

var userLogin= document.getElementById("home")
var adminLogin= document.getElementById("admin")

var Email= document.getElementById("email1")
var Password= document.getElementById("password1")
var btn= document.getElementById("btn")

// btn.addEventListener("click", function(){
//  event.preventDefault()
 
        
//    alert("Logged in as Admin")
// })
function update(){
//  event.preventDefault();
let result= Email.value;
let pass1= Password.value;
    if(result=="admin@empher.com" && pass1=="empher@123"){
       window.location.href="./admin.html"
        alert("Logged in as Admin")
        
        
    }
    else if(result=="user@empher.com" && pass1=="user@123"){
        window.location.href="./books.html"
    }
    else{
        alert("Error...")
    }

}
const loginData=JSON.stringify(result, pass1);
const loginCredential= JSON.parse(result, pass1);