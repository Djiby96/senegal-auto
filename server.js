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
const port= process.env.port || 9999;
app.listen(port, () => console.log(`Server start on port ${port}`));

//Vues des dossiers contenant nos fichiers css, javascript, logo, image ...;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "mes_modules")));
app.use(express.static(path.join(__dirname, "views")));

/* ---  GESTION DE CERTAINES FONCTIONNALITES DE L' APPLICATION COTE CLIENT ET SERVEUR--- */
app.use(appManagement.gestion_message);
//app.use(appManagement.error_404);


app.get("/", search.page_accueil);

app.get("/page=:numero", search.page_accueil);

app.get("/voiture/:modele_numero", search.chercher_voiture);

app.get("/voiture/marque/:marque_voiture", marque_voiture.pageCarsOfMark);

app.get("/voiture/marque/:marque_voiture/page:numero", marque_voiture.pageCarsOfMark);

app.get("/presentation", route.entreprise_presentation);

app.get("/reservation-essai", route.reservation_essai);

app.get("/garantie-achat", route.garantie_achat);

app.get("/location-vehicules", location_vehicule.page_location_vehicule);

app.get("/location-vehicules/page=:numero", location_vehicule.page_location_vehicule);

app.get("/connect-administrator", route.connexion_administrator);

app.get("/admin", admin.recuperer_voitures);

app.get("/admin/add-car", route.add_car_page);

app.get("/admin/ajouter-voiture-location", ajouter_voiture_location.page_ajout);

app.get("/delete-car/:car_number", voiture.delete_car);

app.get("/admin/page=:numero", admin.voir_plus);

app.get("/contacts", route.contact);

app.post("/admin/search_voiture", admin.cherche_voiture);

app.get("/admin/vos-messages", vos_messages.pageMessagesClients);

app.get("/admin/vos-messages/partie-:numero_partie", vos_messages.pageMessagesClients);

app.get("/admin/supprimer-message/message-:id_message", delete_message.message);

app.get("/admin/vos-messages/supprimer-tout", delete_message.allMessage);

app.post("/connect-administrator", admin.administrator_connect);

app.post("/admin/add-car", multerOption.any(), voiture.ajouter_voiture);

app.post("/ajouter-voiture-location", ajouter_voiture_location.enregistrer);

app.post("/send-message", message.sendMessage);
