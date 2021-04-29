





const bouton_menu = document.getElementById("bouton_menu"),
      section_navbar_mobile = document.querySelector(".section_navbar_mobile"),
      container_link_navbar_mobile = document.querySelector(".container_link_navbar_mobile"),
      container_window_icon_exit = document.getElementById("container_window_icon_exit");

/* --  1  -- */ 
bouton_menu.addEventListener("click", ()=>{
    section_navbar_mobile.classList.add("show_section_navbar_mobile");
    container_link_navbar_mobile.classList.add("show_container_link_navbar_mobile");
});    

/* --  2  -- */
container_window_icon_exit.addEventListener("click", ()=>{
    section_navbar_mobile.classList.remove("show_section_navbar_mobile");
    container_link_navbar_mobile.classList.remove("show_container_link_navbar_mobile");
});


const title_services = document.getElementById("title_services"),
      container_link_service = document.querySelector(".container_link_service");

/* --  3  -- */
title_services.addEventListener("click", ()=>{
    var test = container_link_service.classList.contains("show_container_link_service");
    if(test){
        container_link_service.classList.remove("show_container_link_service");
    }else{
        container_link_service.classList.add("show_container_link_service");
    }

});