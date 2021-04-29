/* -- EXPORTATION DES MES PROPRES MODULES --*/
var mysql = require("./mysql_connect.js");

/* initialiation des modules */
const con = new mysql();

var delete_message = {
    /* -- Route pour supprimer un message -- */
    message : (req, res) =>{
        var cookie_connexion = req.cookies.cookie_connexion;
        if(cookie_connexion){
            var id_message = parseInt(req.params.id_message);
            con.query("DELETE FROM message WHERE id_message = ?", [id_message], (err, rs) =>{
                if(err){
                    req.flash("error_message", "Une erreur est survenue reessayez plus tard.");
                    res.redirect("/admin/vos-messages");
                }else{
                    req.flash("success_message", "message supprime avec succes !");
                    res.redirect("/admin/vos-messages");
                }
            });
        }else{
            res.redirect("/connect-administrator");
        }
    },

    /* -- Route pour supprimer tous les messages -- */
    allMessage : (req, res) =>{
        var cookie_connexion = req.cookies.cookie_connexion;
        if(cookie_connexion){
            con.query("DELETE FROM message", (err, rs) =>{
                if(err){
                    req.flash("error_message", "Une erreur est survenue reessayez plus tard.");
                    res.redirect("/admin/vos-messages");
                }else{
                    res.redirect("/admin/vos-messages");
                }
            });
        }else{
            res.redirect("/connect-administrator");
        }

    }

}


module.exports = delete_message;