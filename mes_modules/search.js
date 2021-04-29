// Cette class va nous permettre de chercher dans les voiture dans la base de donnes

//Exportations des autres modules
const mysql = require("./mysql_connect.js");

//initialiation des modules
const con = new mysql();


const search = {
    // chercher une voiture pour la page dentails
    chercher_voiture:(req, res)=>{
        var modele_numero = req.params.modele_numero,
             numero_voiture = parseInt(modele_numero.substring(modele_numero.lastIndexOf("-") + 1));    
        var request_search_voiture = "SELECT distinct marque FROM voiture ; select voiture.*, LOWER(REPLACE(modele, ' ', '-')) AS 'modele_concat', REPLACE(FORMAT(prix, 0), ',', ' ') AS 'prix_formater', DATE_FORMAT(date_publication, '%d/%m/%Y') 'la_date', image.nom_image, image.chemin_image, image.nombre_photos from voiture, image where voiture.numero_voiture=? and voiture.numero_voiture=image.numero_voiture";
        con.query(request_search_voiture, [numero_voiture], (err, rs)=>{
            if(err){
                //console.log(err); //page not found
            }else{
                var marques = rs[0];
                var voiture = rs[1];
                console.log(marques, voiture)
                if(voiture.length == 1){
                    res.render("details_voiture.html", {
                        marques: marques,
                        voiture:voiture
                    });
                }else{
                    res.send("<h5 class='text-center mt-5'>La voiture que vous chercher n'existe plus dans notre magasin.</h5>");
                }
            }
        });
    
    },
    recuperer_voitures:(req, res, position)=>{
        // requetes de recuperation du nombre de voitures et toutes les voitures
        var select_voitures = "SELECT voiture.*, REPLACE(FORMAT(prix, 0), ',', ' ') AS 'prix_formater', LOWER(REPLACE(modele, ' ', '-')) AS 'url_modele', image.nom_image, image.chemin_image, image.nombre_photos from voiture join image using(numero_voiture) WHERE 1=1 ";
        var select_nombre_voiture = "SELECT COUNT(*) FROM voiture WHERE 1=1 ";

        var price_sort="", date_sort="voiture.date_publication DESC ";
        if(req.query.etat){
            select_voitures = select_voitures + "AND voiture.etat_voiture = '"+ req.query.etat +"' ";
            select_nombre_voiture = select_nombre_voiture + "AND voiture.etat_voiture = '"+ req.query.etat +"' ";
        }
        if(req.query.sort == "price_asc"){
            select_voitures = select_voitures + "AND voiture.prix > 1 ";
            price_sort = "voiture.prix ASC, ";
        }
        if(req.query.sort == "price_desc"){
            select_voitures = select_voitures + "AND voiture.prix !=0 ";
            price_sort = "voiture.prix DESC, ";
        }
        if(req.query.sort == "ancienne"){
            date_sort = "voiture.date_publication ASC ";
        }

        select_voitures = select_voitures + "ORDER BY " + price_sort + date_sort + "LIMIT "+position*12 + ", 12";

        var final_request = select_nombre_voiture + ";" + select_voitures + ";" + "Select distinct marque from voiture";
        con.query(final_request, function(err, rs){
            if(err){
                console.log(err);
            }else{
                var nombre_de_voitures = parseInt(rs[0][0]["COUNT(*)"]);
                var voitures = rs[1];
                var nombre_voitures_pages_precedent = position*12 + voitures.length;
                var message_voir_plus;
                var marques = rs[2];
                if(nombre_de_voitures > nombre_voitures_pages_precedent){
                    message_voir_plus = "yes";
                    position = position + 1;
                    res.render("accueil.html", {
                        voitures: voitures,
                        marques: marques,
                        message_voir_plus:message_voir_plus,
                        page:position
                    });
                }else{
                    message_voir_plus = null;
                     res.render("accueil.html", {
                        voitures: voitures,
                        marques: marques,
                        message_voir_plus:message_voir_plus
                    });
                }
            }

        });
    },

    //Route de la page d'accueil
    page_accueil(req, res){
        var params = req.params;
        var params_value = Object.keys(params) 
        if(params_value == 0){
            search.recuperer_voitures(req, res, 0);
        }else{
            var position = parseInt(params.numero);
            search.recuperer_voitures(req, res, position);
        }
    }

}
module.exports = search;
