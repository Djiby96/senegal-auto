// Cette fichier va gerer l' ajout et la connexion du addministrateur

//Exportations de mes modules
const mysql = require("./mysql_connect.js");

//initialisation des modules
const con = new mysql();

var administrateur = {
    administrator_connect:(req, res)=>{
        // Recuperation des donnees de connexion
        var email = req.body.email.toLowerCase();
        var password_admin =req.body.password; 
        var request_search_admin = "SELECT *FROM administrateur WHERE password = ? AND email = ?";
        con.query(request_search_admin, [password_admin, email], function(err, rs){
            if(err){
                //console.log(err);
                req.flash("error_message", "Erreur serveur ! Veuillez reessayez plus tard.");
                res.redirect("/connect-administrator");
            }else{
                if(rs.length == 1){
                    let cookie_connexion = {
                        name: rs[0].nom_complet,
                        email_connexion: email,
                    }
                    res.cookie("cookie_connexion", cookie_connexion, {httpOnly: true});
                    res.redirect("/admin");
                }else{
                    req.flash("error_message", "Vos donnees d'identification sont incorrectes.");
                    res.redirect("/connect-administrator");
                }
            }

        });
    },
    //recuperer les voitures dans la base de donnees
    recuperer_voitures:(req, res)=>{
        var nombre_de_voitures, position, message_voir_plus;
        // Verification du Cookie de connexion
        var cookie_connexion = req.cookies.cookie_connexion;

        if(cookie_connexion){
            // requetes de recuperation du nombre de voitures et toutes les voitures
            var select_voitures = "SELECT COUNT(*) FROM voiture ; SELECT voiture.*, image.nom_image, image.chemin_image, image.nombre_photos from voiture join image using(numero_voiture) ORDER BY voiture.date_publication DESC";
            con.query(select_voitures, function(err, rs){
                if(err){
                    //console.log("error request");
                }else{
                    nombre_de_voitures = parseInt(rs[0][0]["COUNT(*)"]);
                    let all_voiture = rs[1],
                        text_placeholder = "entrez le numero de la voiture",
                        entrez_value = null;
                    if(nombre_de_voitures <= 10){
                        let voitures = all_voiture;
                        message_voir_plus = null;
                        res.render("admin_home.html", {
                            message_flash:null,
                            voitures:voitures,
                            message_voir_plus:message_voir_plus,
                            text_placeholder:text_placeholder,
                            entrez_value:entrez_value
                        });
                    }else{
                        let voitures = all_voiture.slice(0, 10);
                        message_voir_plus = "yes";
                        position = 1;
                        res.render("admin_home.html", {
                            message_flash:null,
                            voitures:voitures,
                            message_voir_plus:message_voir_plus,
                            text_placeholder:text_placeholder,
                            entrez_value:entrez_value,
                            page:position
                        });
                    }
                }
            });
        }else{
            //on redirige l' administrateur sur la page connexion
            res.redirect("/connect-administrator")
        }
    },
    // Rechargement d' autres voitures lorsqu' on clique sur le bouton voir plus
    voir_plus:(req, res)=>{
        var cookie_connexion = req.cookies.cookie_connexion;
        if(cookie_connexion){
            var regex = /\d/g;
            var position = req.params.numero;
                position = position.match(regex).join("");
                position = parseInt(position);
        
            var nombre_de_voitures, message_voir_plus;
        //preparation des deux requetes
            var R1 ="SELECT COUNT(*) FROM voiture ; "; //Permet de savoir le nombre total de voiture enregistrer
            var R2 = "SELECT voiture.*, image.nom_image, image.chemin_image, image.nombre_photos from voiture join image using(numero_voiture) ORDER BY voiture.numero_voiture DESC LIMIT "+position*10+", 10";
            var R = R1+R2;        
            con.query(R, function(err, rs){
                if(err){
                    console.log("probleme de serveur constater !");
                }else{
                    nombre_de_voitures = parseInt(rs[0][0]["COUNT(*)"]);
                    let voitures = rs[1],
                        effectif = (position+1)*10, //effectif nous permet de savoir le nombre total de voiture consulter pour chaque chargement du boutton voir plus
                        text_placeholder = "entrez le numero de la voiture",
                        entrez_value = null;
                    if(nombre_de_voitures<=effectif){
                        message_voir_plus = null;
                        res.render("admin_home.html", {
                            message_flash:null,
                            voitures:voitures,
                            message_voir_plus:message_voir_plus,
                            text_placeholder:text_placeholder,
                            entrez_value:entrez_value
                        });
                    }else{
                        message_voir_plus = "yes";
                        position++;
                        res.render("admin_home.html", {
                            message_flash:null,
                            voitures:voitures,
                            message_voir_plus:message_voir_plus,
                            text_placeholder:text_placeholder,
                            entrez_value:entrez_value,
                            page:position
                        });
                    }
                }
            });
        }else{
            res.redirect("/connect-administrator");
        }
    },

    // Lorsque l'administrateur cherche une voiture
    cherche_voiture:(req, res)=>{
        var cookie_connexion = req.cookies.cookie_connexion;
        if(cookie_connexion){
            var regex = /\d/g;
            var numero_voiture = req.body.numero_voiture;
            numero_voiture = numero_voiture.match(regex).join("");
            numero_voiture = parseInt(numero_voiture);

            var request_search_voiture = "select voiture.*,image.nom_image, image.chemin_image from voiture, image where voiture.numero_voiture=? and voiture.numero_voiture=image.numero_voiture";
            con.query(request_search_voiture, [numero_voiture], (err, rs)=>{
                if(err){
                    //console.log(err);
                    //probleme de serveur constater, veuillez reessayez ulterieurement. Merci !
                }else{
                    let text_placeholder = numero_voiture,
                        entrez_value = numero_voiture;
                    if(rs.length === 1){
                        let voitures = rs;
                        res.render("admin_home.html", {
                            message_flash:null,
                            voitures:voitures,
                            text_placeholder:text_placeholder,
                            entrez_value:entrez_value,
                            message_voir_plus:null
                        });
                    }else{
                        res.render("admin_home.html", {
                            message_flash:null,
                            text_placeholder:text_placeholder,
                            entrez_value:entrez_value,
                            voitures:null,
                            message_voir_plus:null
                        });
                    }
                }
            });
        }else{
            res.redirect("/connect-administrator");
        }
    }
}

module.exports = administrateur;