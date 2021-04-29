

const photo_du_vehicule = document.getElementById("photo_du_vehicule");

// Montrer les autres images correspondante pour le modele de voiture presente
const nombre_photos = parseInt(photo_du_vehicule.getAttribute("nombre-photos")); //le nombre de photos correspondante pour cette voiture ...
var imgSrc = photo_du_vehicule.getAttribute("src"); //source principal du premier image
var img_src_1, new_imgSrc;
var i=1;

function showAnotherImage(){
    i++;
    var limit = nombre_photos+1;
    if(i === limit){
        i=1;
    }
    img_src_1 = imgSrc.substring(0, imgSrc.lastIndexOf("_")+1);
    new_imgSrc = img_src_1+i+".jpg";
    photo_du_vehicule.setAttribute("src", new_imgSrc);
}

// J'execute la fonction toute les 1 seconde .....
setInterval(showAnotherImage, 5050);

//IMPORT DES IMAGES DE MARQUE 
import image_marque_voiture from "./image_marque_voiture.js";

const image_marque = document.querySelectorAll(".image_marque");

//NOS MARQUES
for(let i= 0; i < image_marque.length; i++){
    var marque_correspondante = image_marque[i].getAttribute("marque");
    image_marque[i].setAttribute("src", image_marque_voiture.get(marque_correspondante));
}
