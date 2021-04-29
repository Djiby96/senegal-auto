
/* -- EXPORTATION DES MES PROPRES MODULES --*/
var mysql = require("./mysql_connect.js");

/* initialiation des modules */
const con = new mysql();

var location_vehicule = {

    /*-- Route '/location-vehicule' --*/
    voitures_location: (req, res, position) =>{
        var select_vehicules_location = "SELECT COUNT(*) FROM voiture_location; SELECT numero_voiture, modele, chemin_image, tarif_par_region FROM voiture INNER JOIN image USING(numero_voiture) INNER JOIN voiture_location USING(numero_voiture) LIMIT "+position*20 +", 20";
        con.query(select_vehicules_location, (err, rs) =>{
            if(err){
                //console.log(err);
            }else{
                var nombre_total_voitures_location = rs[0][0]['COUNT(*)'];
                var vehicules_location = rs[1];
                var nombre_precedent = position*20 + vehicules_location.length;
                if(nombre_total_voitures_location > nombre_precedent){
                    var button_suivant = "yes";
                    var numero = position + 1;
                }else{
                    var button_suivant = "no";
                    var numero = null;
                }

                res.render("location_vehicule.html", {
                    vehicules_location : vehicules_location,
                    button_suivant: button_suivant,
                    numero: numero
                });
            }
        });
    },

    page_location_vehicule: (req, res)=>{
        var params = req.params;
        var params_value = Object.keys(params) 
        if(params_value == 0){
            location_vehicule.voitures_location(req, res, 0);
        }else{
            var position = parseInt(params.numero);
            location_vehicule.voitures_location(req, res, position);
        }
    }
}


module.exports = location_vehicule;