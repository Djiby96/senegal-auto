
const select_type_car = document.getElementById("select_type_car");
const select_filtre = document.getElementById("select_filtre");


var document_url = document.documentURI;
var myURL = new URL(document_url);
var params = new URLSearchParams(myURL.search);

//Trier sur l'etat de la voiture
select_type_car.addEventListener("change", ()=>{
    params.set("etat", select_type_car.value);
    var new_string_params = params.toString();
    window.location.href = "http://localhost:9999/?" + new_string_params + "#voitures";
    
});

//Trier sur le prix et la date de la voiture
select_filtre.addEventListener("change", ()=>{
    params.set("sort", select_filtre.value);
    var new_string_params = params.toString();
    window.location.href = "http://localhost:9999/?" + new_string_params + "#voitures";
});


//Mettre la valeur selectionner au chargement de la page

const type_car = document.querySelectorAll(".type_car");
const filtre_option = document.querySelectorAll(".filtre_option");

// pour le type de voiture
var type_car_select = params.get("etat");
for(let i = 0; i < type_car.length; i++){
    let value_type_cart = type_car[i].getAttribute("value");
    if(value_type_cart == type_car_select){
        let selected_attribut = document.createAttribute("selected");
        type_car[i].setAttributeNode(selected_attribut);
        break;
    }
}

//Pour le filtre
var filtre_params = params.get("sort");
for(let i = 0; i < filtre_option.length; i++){
    let filtre__value = filtre_option[i].getAttribute("value");
    if(filtre__value == filtre_params){
        let selected_attribut = document.createAttribute("selected");
        filtre_option[i].setAttributeNode(selected_attribut);
        break;
    }
}


const lien_voir_plus = document.getElementById("lien_voir_plus");

// Mettre la chaine de requete sous le lien du boutons voir plus
var string_params = window.location.search;
if(lien_voir_plus){
    var nouveau_lien_voir_plus = lien_voir_plus.getAttribute("href") + string_params +"#voitures";  
    lien_voir_plus.setAttribute("href", nouveau_lien_voir_plus);  
}
