
const page_details_images = document.querySelector(".page_details_images");
const my_visualise = document.querySelectorAll(".my-visualise");
const img_for_car = document.querySelectorAll(".img_for_car");
const text_modele = document.querySelectorAll(".text_modele");
const titre_modele_voiture = document.getElementById("titre_modele_voiture");
const images_car = document.getElementById("images_car");
const text_compteur = document.getElementById("text_compteur");
const offre = document.querySelectorAll(".my-container-offre");
const bouton_precedent = document.getElementById("bouton_precedent");
const bouton_suivant = document.getElementById("bouton_suivant");
const exit_show_images = document.getElementById("exit_show_images");

// variable contenant le nombre de photos images pour chaque offre
var nombre_images, imgSrc;
var global_incrementation; //variable a incrementer pour next et suivant

//Affichage du boite pour voir les images ...
for(let i=0;i<my_visualise.length; i++){
    my_visualise[i].addEventListener("click", function(){
        var test = page_details_images.classList.contains("show_page_details_images");
        if(!test){
            global_incrementation=1;
            let modele_voiture = text_modele[i].textContent; //recuperation de la modele du voiture
            imgSrc = img_for_car[i].getAttribute("src"); //recuperation de la source de l' image
            nombre_images = offre[i].getAttribute("nombre-image"); //recuperer le nombre image de l' offre
            text_compteur.textContent="1/"+nombre_images;
            titre_modele_voiture.textContent = modele_voiture;
            images_car.setAttribute("src", imgSrc);
            page_details_images.classList.add("show_page_details_images");
            page_details_images.classList.remove("disabled_page_details_images");
        }else{
            page_details_images.classList.remove("disabled_page_details_images");
        }
    });
}

// Quitter la page visualisation lorsqu' on clique le boutton quitter
exit_show_images.addEventListener("click", function(){
    var test = page_details_images.classList.contains("disabled_page_details_images");
    if(!test){
        page_details_images.classList.remove("show_page_details_images");
        page_details_images.classList.add("disabled_page_details_images");
    }else{
        //nothing
    }

});

//Go next images when click next button
var img_src_1, img_extension, new_imgSrc;
bouton_suivant.addEventListener("click", function(){
    global_incrementation++;
    var nbr_img = parseInt(nombre_images);
    if(global_incrementation===nbr_img+1){
        global_incrementation=1;
    }

    img_src_1 = imgSrc.substring(0, imgSrc.lastIndexOf("_")+1);
    img_extension = imgSrc.substring(imgSrc.lastIndexOf("."));
    new_imgSrc = img_src_1+global_incrementation+img_extension;
    text_compteur.textContent=global_incrementation+"/"+nombre_images;
    images_car.setAttribute("src", new_imgSrc);
});
//Go previous images when click previous button
bouton_precedent.addEventListener("click", function(){
    global_incrementation--;
    var nbr_img = parseInt(nombre_images);
    if(global_incrementation===0){
        global_incrementation=nbr_img;
    }

    img_src_1 = imgSrc.substring(0, imgSrc.lastIndexOf("_")+1);
    img_extension = imgSrc.substring(imgSrc.lastIndexOf("."));
    new_imgSrc = img_src_1+global_incrementation+img_extension;
    text_compteur.textContent=global_incrementation+"/"+nombre_images;
    images_car.setAttribute("src", new_imgSrc);
});