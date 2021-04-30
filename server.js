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
const page = require("./mes_modules/page.js"),
      appManagement = require("./mes_modules/appManagement.js");
      

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


app.get("https://senegal-auto.herokuapp.com", page.v8);

app.get("https://senegal-auto.herokuapp.com/voiture/kia-level-18-2728", page.v1);
app.get("https://senegal-auto.herokuapp.com/voiture/mercedes-level-vitesse-2908", page.v2);
app.get("https://senegal-auto.herokuapp.com/voiture/208-gt-suedois-5562", page.v3);
app.get("https://senegal-auto.herokuapp.com/voiture/american-great-teager-car-5948", page.v4);
app.get("https://senegal-auto.herokuapp.com/voiture/bmw-4022", page.v5);
app.get("https://senegal-auto.herokuapp.com/voiture/grille-allemande-new-generation-3252", page.v6);
app.get("https://senegal-auto.herokuapp.com/voiture/red-champion-2020-1257", page.v7);

