//Exportation des modules de Node js ....

const express = require("express");
const path = require("path");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer"),
      session = require("express-session"),
      flash = require("connect-flash");

//Initialisation de l' application
const app = express();
const multerOption = new multer();

//exportations de mes modules
const search = require("./mes_modules/search.js"),
      route = require("./mes_modules/route.js"),
      admin = require("./mes_modules/administrateur.js"),
      voiture = require("./mes_modules/voiture.js"),
      user = require("./mes_modules/client.js"),
      location_vehicule = require("./mes_modules/location_vehicule.js"),
      message = require("./mes_modules/message.js"),
      appManagement = require("./mes_modules/appManagement.js"),
      ajouter_voiture_location = require("./mes_modules/ajouter_voiture_location.js"),
      vos_messages = require("./mes_modules/vos_message.js"),
      delete_message = require("./mes_modules/delete_messages.js"),
      marque_voiture = require("./mes_modules/marque_voiture.js"); 
      

// Initialisation de mes modules

//Initialisation de  l'application pour la rendu de nos moteurs de modeles(vues) et des autres modules
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: "hbdhj738cnwwwusd78HDGT777GGSYYEWhshsueuhdhdhdhdshdhfujd737837292299999", resave: false, saveUninitialized: true}));
app.use(flash());
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

 //port d'ecoute de l' application sur le serveur
const port= process.env.PORT || 9999;
app.listen(port, () => console.log(`Server start on port ${port}`));

//Vues des dossiers contenant nos fichiers css, javascript, logo, image ...;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "mes_modules")));
app.use(express.static(path.join(__dirname, "views")));

/* ---  GESTION DE CERTAINES FONCTIONNALITES DE L' APPLICATION COTE CLIENT ET SERVEUR--- */
app.use(appManagement.gestion_message);
//app.use(appManagement.error_404);


app.get("https://senegal-auto.herokuapp.com", search.page_accueil);

app.get("https://senegal-auto.herokuapp.com/page=:numero", search.page_accueil);

app.get("https://senegal-auto.herokuapp.com/voiture/:modele_numero", search.chercher_voiture);

app.get("https://senegal-auto.herokuapp.com/voiture/marque/:marque_voiture", marque_voiture.pageCarsOfMark);

app.get("https://senegal-auto.herokuapp.com/voiture/marque/:marque_voiture/page:numero", marque_voiture.pageCarsOfMark);

app.get("https://senegal-auto.herokuapp.com/presentation", route.entreprise_presentation);

app.get("https://senegal-auto.herokuapp.com/reservation-essai", route.reservation_essai);

app.get("https://senegal-auto.herokuapp.com/garantie-achat", route.garantie_achat);

app.get("https://senegal-auto.herokuapp.com/location-vehicules", location_vehicule.page_location_vehicule);

app.get("https://senegal-auto.herokuapp.com/location-vehicules/page=:numero", location_vehicule.page_location_vehicule);

app.get("https://senegal-auto.herokuapp.com/connect-administrator", route.connexion_administrator);

app.get("https://senegal-auto.herokuapp.com/admin", admin.recuperer_voitures);

app.get("https://senegal-auto.herokuapp.com/admin/add-car", route.add_car_page);

app.get("https://senegal-auto.herokuapp.com/admin/ajouter-voiture-location", ajouter_voiture_location.page_ajout);

app.get("https://senegal-auto.herokuapp.com/delete-car/:car_number", voiture.delete_car);

app.get("https://senegal-auto.herokuapp.com/admin/page=:numero", admin.voir_plus);

app.get("https://senegal-auto.herokuapp.com/contacts", route.contact);

app.post("https://senegal-auto.herokuapp.com/admin/search_voiture", admin.cherche_voiture);

app.get("https://senegal-auto.herokuapp.com/admin/vos-messages", vos_messages.pageMessagesClients);

app.get("https://senegal-auto.herokuapp.com/admin/vos-messages/partie-:numero_partie", vos_messages.pageMessagesClients);

app.get("https://senegal-auto.herokuapp.com/admin/supprimer-message/message-:id_message", delete_message.message);

app.get("https://senegal-auto.herokuapp.com/admin/vos-messages/supprimer-tout", delete_message.allMessage);

app.post("https://senegal-auto.herokuapp.com/connect-administrator", admin.administrator_connect);

app.post("https://senegal-auto.herokuapp.com/admin/add-car", multerOption.any(), voiture.ajouter_voiture);

app.post("https://senegal-auto.herokuapp.com/ajouter-voiture-location", ajouter_voiture_location.enregistrer);

app.post("https://senegal-auto.herokuapp.com/send-message", message.sendMessage);
