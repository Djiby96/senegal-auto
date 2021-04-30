//Exportation des modules de Node js ....

const express = require("express");
const path = require("path");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

//Initialisation de l' application
const app = express();

//exportations de mes modules
const page = require("./mes_modules/page.js"),
      appManagement = require("./mes_modules/appManagement.js");
      

// Initialisation de mes modules

//Initialisation de  l'application pour la rendu de nos moteurs de modeles(vues) et des autres modules
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

 //port d'ecoute de l' application sur le serveur
const port= process.env.PORT || 9999;
app.listen(port, () => console.log(`Server start on port ${port}`));

app.use(cookieParser("Djiby_Sarr_1996"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Vues des dossiers contenant nos fichiers css, javascript, logo, image ...;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "mes_modules")));
app.use(express.static(path.join(__dirname, "views")));


app.get("", page.v8);

app.get("/voiture/kia-level-18-2728", page.v1);
app.get("/voiture/mercedes-level-vitesse-2908", page.v2);
app.get("/voiture/208-gt-suedois-5562", page.v3);
app.get("/voiture/american-great-teager-car-5948", page.v4);
app.get("/voiture/bmw-4022", page.v5);
app.get("/voiture/grille-allemande-new-generation-3252", page.v6);
app.get("/voiture/red-champion-2020-1257", page.v7);

app.get("/location-vehicules", page.v9);

app.get("/garantie-achat", page.v10);

app.get("/reservation-essai", page.v11);

app.get("/contacts", page.v12);

app.get("/presentation", page.v13);

