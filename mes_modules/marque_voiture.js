
//Exportations des autres modules
const mysql = require("./mysql_connect.js");

//initialiation des modules
const con = new mysql();



var marque_voiture = {
    getCarsOfMark : (req, res, position) =>{
        var marque_voiture = req.params.marque_voiture;
        var R1 = "SELECT COUNT(*) FROM voiture WHERE voiture.marque =?";
        var R2 = "SELECT voiture.*, REPLACE(FORMAT(prix, 0), ',', ' ') AS 'prix_formater', LOWER(REPLACE(modele, ' ', '-')) AS 'url_modele', image.nom_image, image.chemin_image, image.nombre_photos from voiture join image using(numero_voiture) WHERE voiture.marque =? ORDER BY voiture.date_publication DESC LIMIT "+position*20 + ", 20";
        var R3 = "Select distinct marque from voiture";

        var request_select = R1 + ";" + R2 + ";" +R3;

        con.query(request_select, [marque_voiture, marque_voiture], function(err, rs){
            if(err){
                res.redirect("/");
            }else{
                console.log(rs);
                var nombre_de_voitures = parseInt(rs[0][0]["COUNT(*)"]);
                var voitures = rs[1];
                var marques = rs[2];
                var nombre_voitures_pages_precedent = position*20 + voitures.length;
                var message_voir_plus;
                if(nombre_de_voitures > nombre_voitures_pages_precedent){
                    message_voir_plus = "yes";
                    position = position + 1;
                    res.render("marque_voiture.html", {
                        marque: marque_voiture,
                        marques:marques,
                        voitures:voitures,
                        message_voir_plus:message_voir_plus,
                        page:position
                    });
                }else{
                    message_voir_plus = null;
                     res.render("marque_voiture.html", {
                        marque: marque_voiture,
                        marques:marques,
                        voitures:voitures,
                        message_voir_plus:message_voir_plus
                    });
                }
            }

        });

    },

    pageCarsOfMark : (req, res) =>{
        var params = req.params;
        var params_tab = Object.keys(params) 
        if(params_tab.length == 1){
            marque_voiture.getCarsOfMark(req, res, 0);
        }else{
            var position = parseInt(params.numero);
            marque_voiture.getCarsOfMark(req, res, position);
        }
    }
}


module.exports = marque_voiture;