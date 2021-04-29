
// Mettre le box-shadow sur l' element div contenant notre input password ....
const input_password = document.getElementById("input_password");
const container_iput_password = document.getElementById("container_iput_password");
const input_email = document.getElementById("input_email");

// box-shadow effet sur le div lorsqu' on clique sur le input password
input_password.addEventListener("click", function(){
    container_iput_password.style.boxShadow = "0px 0px 0 3.5px rgba(38, 143, 255, 0.5)";
});
//On enleve le box-shadow lorsqu' on click sur le input email
input_email.addEventListener("click", function(){
    container_iput_password.style.boxShadow = "";
});

// Procedure pour montrer le mot de passe en clair ou bien de le cacher lorsqu' on clique sur l 'image a cote
const img_see_password = document.getElementById("img_see_password");
img_see_password.addEventListener("click", function(){
    var input_type = input_password.getAttribute("type");
    if(input_type === "password"){
        input_password.setAttribute("type", "text");
        this.setAttribute("src", "/icon_logo/visibility_off_30px.svg");
    }else{
        input_password.setAttribute("type", "password");
        this.setAttribute("src", "/icon_logo/visibility_30px.svg");
    }
});

//Procedure d' affichage du messages d' erreur en cas d' erreur de connexion