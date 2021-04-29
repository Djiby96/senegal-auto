// Traitement de l' envoie des donnees
const documents = document.getElementById("documents");

// Ouvrir le fenetre pour permettre a l' admin de choisir ces images
const button_chooze_img_car = document.getElementById("button_chooze_img_car");

button_chooze_img_car.addEventListener("click", ()=>{
    if(documents){
        documents.click();
    }else{
        alert("Desolee ! Un probleme est survenue, veuillez rechager la page et reessayer. Merci !");
    }
});

// Message Dialog a chaque fois que l' utilisateur change les images
const message_alert = document.querySelector(".message_alert");
const notify_img_chooze = document.querySelector(".notify_img_chooze"); 

var files;
// function de verification de la taille des images passe
function getImgSize(images){
    var test = false;
    for(let i = 0; i<images.length;i++){
        let img_size = images[i].size/(1024*1024);
        if(img_size>2){
            test = true;
            break;
        }else{
            // nothing
        }
    }
    return test;
}

documents.addEventListener("change", ()=>{
    files = documents.files;
    if(files.length>0){
        let img_number = files.length; 
        let message = null;
        let test_value = getImgSize(files);
        if(test_value){
            alert("Il est preferable de choisir des images de taille inferieur a 1Mo.");
        }else{
            if(img_number === 1){
                message = img_number.toString()+" image a ete choisie !";
            }else{
                message = img_number.toString()+" images ont ete choisies !";
            }
            notify_img_chooze.classList.remove("disabled_notify_img_chooze");
            message_alert.classList.add("alert-success");
            message_alert.classList.remove("alert-danger");
            message_alert.textContent = message;
        }
    }else{
        notify_img_chooze.classList.add("disabled_notify_img_chooze");
        message_alert.textContent = "";
    }
});

// Verications des donnees en soumission
const form_car = document.getElementById("form_car");
const spinner_load_to_save_data = document.querySelector(".spinner_load_to_save_data");

form_car.onsubmit = (event)=>{
    var files = documents.files;
    if(files.length === 0){
        notify_img_chooze.classList.remove("disabled_notify_img_chooze");
        message_alert.classList.remove("alert-success");
        message_alert.classList.add("alert-danger");
        message_alert.textContent = "Vous devez choisir des images pour representer la voiture.";
        event.preventDefault();
    }else{
        spinner_load_to_save_data.classList.remove("disabled_spinner_load_to_save_data");     
    }
}

// Enlever les messages flash une fois on click sur l' ecran
setTimeout(()=>{
    const message_notification = document.getElementById("message_notification");
    if(message_notification){
        message_notification.style.display = "none";

    }
}, 8000)