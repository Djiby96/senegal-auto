/* 
    TRAITEMENTS DES MESSAGES :
     
       1. Cacher les autres messages si on clique sur un message

       2. Fonction cachant les autres messages et montrant les autres fleches  qui montrent leur message

       3. Afficher le message si on clique sur le fleche qui doit le montrer

       4. Cacher le message si on clique sur le fleche qui doit le cacher
*/

const icon_angle_down = document.querySelectorAll(".icon_angle_down"),
      container_message_date = document.querySelectorAll(".container_message_date");

/* -- 1 -- */
function hideShow(i){
    for(let k = 0; k < container_message_date.length; k++){
        if(k != i){
            container_message_date[k].classList.remove("show_container_message_date");
            icon_angle_down[k].style.opacity = 1;
        }
    }
}


/* -- 2 -- */
for(let i = 0; i < icon_angle_down.length; i++){
    icon_angle_down[i].addEventListener("click", ()=>{
        icon_angle_down[i].style.opacity = 0;
        container_message_date[i].classList.add("show_container_message_date");

        hideShow(i);
    });
}

const icon_angle_up = document.querySelectorAll(".icon_angle_up");

/* -- 3 -- */
for(let i = 0; i < icon_angle_up.length; i++){
    icon_angle_up[i].addEventListener("click", ()=>{
        container_message_date[i].classList.remove("show_container_message_date");
        hideShow(i);
        icon_angle_down[i].style.opacity = 1;
    });
}