
// Afficher la boite de Dialog permettant de faire une suppression de voiture
const container_img_car = document.querySelectorAll(".container_img_car"),
      img_car = document.querySelectorAll(".img_car"),
      delete_car_page = document.querySelector(".delete_car_page"),
      container_button_delete_cancel = document.querySelector(".container_button_delete_cancel"),
      car_modele = document.querySelectorAll(".car_modele"),
      item_img_delete = document.getElementById("item_img_delete"),
      title_car = document.getElementById("title_car"),
      ref_car = document.getElementById("ref_car"),
      button_delete_link = document.getElementById("delete_link_button"),
      button_cancel = document.getElementById("button_cancel");

for(let i = 0; i<container_img_car.length; i++){
    container_img_car[i].addEventListener("click", ()=>{
        let img_car_src = img_car[i].getAttribute("src"),
            car_number = container_img_car[i].getAttribute("car-number"),
            link_delete_car = "http://localhost:9999/delete-car/"+car_number;
        item_img_delete.setAttribute("src", img_car_src);
        title_car.textContent = car_modele[i].textContent;
        ref_car.textContent = "numero : " + car_number;
        button_delete_link.setAttribute("href", link_delete_car);
        
        delete_car_page.classList.add("show_delete_car_page");  
        container_button_delete_cancel.style.animation = "zoom 0.5s";
    });
}      

// Cliquer sur le button Annuler pour Annuler la suppression
button_cancel.addEventListener("click", ()=>{
    delete_car_page.classList.remove("show_delete_car_page");
    container_button_delete_cancel.style.animation = "none";
});