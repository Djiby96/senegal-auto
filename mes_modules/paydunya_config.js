
var paydunya = require("paydunya");

var setup = new paydunya.Setup({
    masterKey: '0rPJoAbi-2qPb-H6NS-bFs5-zjeolhNph2KX',
    privateKey: 'test_private_0eCmIoe8Cjf0kBLEct0eNe8b3cD',
    publicKey: 'test_public_5XMMcitoXMEnzPYRq1W71KieQIu',
    token: 'oZeTi33AQiz68dpN34tl',
    mode: 'test' 
});

var store = new paydunya.Store({
    name: 'Teranga-Dakar', // Seul le nom est requis
    tagline: "ACHAT DE CREDIT",
    phoneNumber: '777781562',
    postalAddress: 'Dakar Plateau - Etablissement kheweul',
    websiteURL: 'https://www.senegal-auto.herokuapp.com',
    logoURL: 'https://senegal-auto.herokuapp.com/images_videos/administrateur.png',
    callbackURL: 'https://senegal-auto.herokuapp.com/IPN/notification_paydunya.js',
    cancelURL: 'https://senegal-auto.herokuapp.com/acces-compte/status-paiement',
    returnURL: 'https://senegal-auto.herokuapp.com/acces-compte/status-paiement'
});


module.exports = {setup, store}