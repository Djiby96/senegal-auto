
// Traitement de l' affichage du onglet de menu de l' admin
const button_img_menu = document.querySelector(".button_img_menu");
const container_admin_navigation = document.querySelector(".container_admin_navigation");
const menu_navigation_admin = document.querySelector(".menu_navigation_admin");

button_img_menu.addEventListener("click", function(){
    var test = container_admin_navigation.classList.contains("show_container_admin_navigation");
    if(!test){
        container_admin_navigation.classList.add("show_container_admin_navigation");
        menu_navigation_admin.classList.add("menu_navigation_width");
        // menu_navigation_admin.classList.remove("disabled_menu_navigation_admin");
    }else{
        container_admin_navigation.classList.remove("show_container_admin_navigation");
        menu_navigation_admin.classList.remove("menu_navigation_width")
        // menu_navigation_admin.classList.add("disabled_menu_navigation_admin");
    }
});

// Je cache le menu de l' admin une fois il clique sur l' espace sombre vide a droite
container_admin_navigation.onclick = (event)=>{
    var element = event.target
    if(element === container_admin_navigation){
        container_admin_navigation.classList.remove("show_container_admin_navigation");
        menu_navigation_admin.classList.remove("menu_navigation_width")
    }
}
