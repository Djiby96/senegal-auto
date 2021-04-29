/*
   FONCTIONNALITES :

      1. Afficher l' interface permettant de supprimer le message

      2. Annuler la suppression du message en cliquer sur le bouton annuler

*/

const container_icon_ellipsis = document.querySelectorAll(".container_icon_ellipsis"),
      delete_message_interface = document.querySelector(".delete_message_interface"),
      link_delete_message = document.getElementById("link_delete_message");

/* -- 1 -- */
for(let i = 0; i < container_icon_ellipsis.length; i++){
    container_icon_ellipsis[i].addEventListener("click", () =>{
        var id_message = container_icon_ellipsis[i].getAttribute("id-message");
        link_delete_message.setAttribute('href', "/admin/supprimer-message/message-"+id_message);
        delete_message_interface.classList.add("show_delete_message_interface");
    });
}

const button_cancel_delete_message = document.getElementById("button_cancel_delete_message");

/* -- 1 -- */
button_cancel_delete_message.addEventListener("click", () =>{
    delete_message_interface.classList.remove("show_delete_message_interface");
});