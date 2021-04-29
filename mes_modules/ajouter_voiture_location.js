
/* -- EXPORTATION DES MES PROPRES MODULES --*/
var mysql = require("./mysql_connect.js");

/* initialiation des modules */
const con = new mysql();


var ajouter_voiture_location = {
    /* --- Route de la page '/ajouter-voiture-location' --- */
    page_ajout : (req, res) =>{
        var cookie_connexion = req.cookies.cookie_connexion;
        if(cookie_connexion){
            res.render("./ajouter_voiture_location.html");
        }else{
            res.redirect("/connect-administrator");
        }
    },

    /* --- Route de traitement des donnees du formulaire d'ajout de voiture de location --- */
    enregistrer : (req, res) =>{
        var prix_locations = req.body.prix_par_jours.join("-");
        var voiture_location = [[req.body.numero_voiture, prix_locations]];
        con.query("INSERT INTO voiture_location VALUES ?", [voiture_location], (err, rs) =>{
            if(err){
                if(err.errno == 1452 || err.sqlState == "23000"){
                    req.flash("error_message", "Ce numero de voiture n'existe pas.");
                }else{
                    req.flash("error_message", "Erreur serveur ! reessayer ulterieurement.");    
                }
            }else{
                req.flash("success_message", "Voiture de location ajoute avec succes !");
            }
            res.redirect("/admin/ajouter-voiture-location");
        });
    }

}    


module.exports = ajouter_voiture_location;