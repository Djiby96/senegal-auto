// Partie traitement pour chaque voitures Nos Modeles de voitures 
const my_container_offre = document.querySelectorAll(".my-container-offre");
const my_container_detail = document.querySelectorAll(".my-container-detail");

//Montrer le details et la visualisation du pour chaque offres

for(let i=0; i<my_container_offre.length;i++){
    my_container_offre[i].addEventListener("mouseover", function(){
        var test = my_container_detail[i].classList.contains("my-container-detail-show");
        if(!test){
            my_container_detail[i].classList.add("my-container-detail-show");
            my_container_detail[i].classList.remove("my_container_detail_disabled");
        }else{
            my_container_detail[i].classList.remove("my_container_detail_disabled");
            // nothing
        }
    });
}
  

for(let i=0; i<my_container_offre.length;i++){
    my_container_offre[i].addEventListener("mouseout", function(){
        var test = my_container_detail[i].classList.contains("my_container_detail_disabled");
        if(!test){
            my_container_detail[i].classList.remove("my-container-detail-show");
            my_container_detail[i].classList.add("my_container_detail_disabled");
        }else{
            my_container_detail[i].classList.remove("my_container_detail_disabled");
            // nothing
        }
    });
       
}
//IMPORT DES IMAGES DE MARQUE
import image_marque_voiture from "./image_marque_voiture.js";

const img_title = document.getElementById("img_title");

//Mettre le logo du marque dans le titre de l'image
var marque_correspondante = img_title.getAttribute("marque");
console.log(image_marque_voiture.get(marque_correspondante));
img_title.setAttribute("src", image_marque_voiture.get(marque_correspondante));


//IMPORT DES IMAGES DE MARQUE 
const image_marque = document.querySelectorAll(".image_marque");

//NOS MARQUES
for(let i= 0; i < image_marque.length; i++){
    var marque_correspondante = image_marque[i].getAttribute("marque");
    image_marque[i].setAttribute("src", image_marque_voiture.get(marque_correspondante));
}
