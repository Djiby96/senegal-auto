// Cette class permetra de creer des objets voiture; d' ajouter, de modifier et de supprimer ces objets en meme temps

//Exportations des autres modules
const mysql = require("./mysql_connect.js");
const donnees = require("./data_treat.js");
const date_format = require("./data_form.js");

//initialiation des modules
const con = new mysql();
const dataForm = new date_format();
//Representation de l' objet voiture
var voiture = {
    // les attributs ou proprietes seront creer automaatique

    //les methodes
    ajouter_voiture:(req, res)=>{
        var car_data = req.body,// information text du voiture
            files = req.files; //recuperation des fichiers uniquement

        var files_upload = donnees.uploadFile(files), //appelle du methode de telechargement a partir de la class data_treat.js ...
            number_file_download = files_upload[1];
        if(number_file_download === files.length){
            var data_row_image = [files_upload[0]],
                numero_voiture = files_upload[0][3],
                data_row_car = [[numero_voiture, car_data.modele, car_data.marque, car_data.annee, car_data.carburant, dataForm.prix_visible_format(car_data.kilometrage), car_data.boite_vitesse, car_data.color, car_data.price, car_data.description, car_data.etat_voiture]];
            // Preparation de l' insertion des donnees
            var insert_data = "START TRANSACTION ; INSERT INTO voiture(numero_voiture, modele, marque, annee, carburant, kilometrage, boite_vitesse, couleur, prix, description, etat_voiture) VALUES ? ; INSERT INTO image VALUES ? ; COMMIT";
            con.query(insert_data, [data_row_car, data_row_image], (err, rs)=>{
                if(err){
                    res.render("./add_car.html", {
                        message: "Server Problem"
                    });
                    console.log(err);
                }else{
                    res.render("./add_car.html", {
                        message: "Data save"
                    });
                }
            });

        }else{
            res.render("./add_car.html", {
                message: "Probleme to download files"
            });
        }

        
    },
    delete_car:(req, res)=>{
        // Verification de la cookie de connexion
        var cookie_connexion = req.cookies.cookie_connexion;
        if(cookie_connexion){
            let car_number = req.params.car_number,
                request_to_delete_car = "delete from voiture where numero_voiture = ?"; //requete permettant de supprimer la voiture concernee ...

            /* Execution de la requete */   
            con.query(request_to_delete_car, [car_number], (err, rs)=>{
                if(err){
                    //Probleme cote serveur, veuillez reessayez ulterieurement ...
                    //console.log(err);
                }else{
                    // on execute la fonction de suppresion des images representives du voiture correspondante ...
                    console.log("car is delete ...");
                    res.redirect("/admin");
                }
            });

        }else{
            // Nous avons perdu vos informations de connexion, veuillez vous reconnectez ici svp ...
        }
    }

}


module.exports = voiture;
