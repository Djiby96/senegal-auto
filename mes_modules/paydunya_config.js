
var paydunya = require("paydunya");

var setup = new paydunya.Setup({
    masterKey: '0rPJoAbi-2qPb-H6NS-bFs5-zjeolhNph2KX',
    privateKey: 'test_private_uhXInJJU2FQXJlySZcUXNn586zz',
    publicKey: 'test_public_lRyigTSordsXNtBYFaMEVK9jzk1',
    token: '0oWJitJik2osn85xX5GJ',
    mode: 'test' 
});

var store = new paydunya.Store({
    name: 'Teranga-Dakar', // Seul le nom est requis
    tagline: "ACHAT DE CREDITS",
    phoneNumber: '777781562',
    postalAddress: 'Dakar Plateau - Etablissement kheweul',
    websiteURL: 'https://www.senegal-auto.herokuapp.com',
    logoURL: 'https://senegal-auto.herokuapp.com/images_videos/administrateur.png',
    callbackURL: 'https://senegal-auto.herokuapp.com/notification_paydunya.js'
});


module.exports = {setup, store}