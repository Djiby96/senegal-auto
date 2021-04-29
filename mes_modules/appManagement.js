/* ---
    Ce fichier va gerer la gestion de certaines fonctionnalites de l' application :

        1. Definir et stocker les messages(simple ou alerte) provenant du serveur dans la machine cliente enfin de pouvoir l' afficher



---*/
var appManagement = {
    /* ---  1  ---*/
    gestion_message : (req, res, next)=>{
        res.locals.success_message = req.flash("success_message")
        res.locals.error_message = req.flash("error_message")
        next();
        /* Pour teranga-senegal */
        //res.locals.messages = req.flash("messages")
    }

    /* -- Gestion des erreurs de page 'NOT FOUND' -- */
    // error_404 : (req, res) =>{
    //     res.status(404).render("./404.html");
    // }
}

module.exports = appManagement;