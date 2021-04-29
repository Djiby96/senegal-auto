
// Traitement des donnees apres l' avoir envoyees
const form_contactez_nous = document.getElementById("form_contactez_nous");
const button_submit = document.getElementById("button_submit")
const input_user_name = document.getElementById("input_user_name");
const input_email_telephone = document.getElementById("input_email_telephone");
const input_message = document.getElementById("input_message");
const spinner_load_to_save_data = document.querySelector(".spinner_load_to_save_data");

form_contactez_nous.onsubmit = (event)=>{
    var name_value = input_user_name.value,
        coordonnees_value = input_email_telephone.value,
        message_text = input_message.value;
    if(name_value && coordonnees_value && message_text){
        spinner_load_to_save_data.classList.remove("disabled_spinner_load_to_save_data");
        let disabled_attribute = document.createAttribute("disabled");
        button_submit.setAttributeNode(disabled_attribute);
        // J' enleve la desactivation du bouton 10 secondes apres
        setTimeout(()=>{
            button_submit.removeAttribute("disabled");
            spinner_load_to_save_data.classList.add("disabled_spinner_load_to_save_data");
        }, 10000);
    }else{
        event.preventDefault();
    }
}