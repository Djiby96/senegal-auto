
// Affichage de l' animation de chargement lorsqu' on clique sur le boutton supprimer
const delete_link_button = document.getElementById("delete_link_button"),
      show_spinner = document.querySelector(".show_spinner"),
      icon_delete = document.querySelector(".icon_delete");

delete_link_button.addEventListener("click", ()=>{
    icon_delete.classList.add("remove_icon_delete");
    show_spinner.classList.remove("remove_spinner");
});
console.log()