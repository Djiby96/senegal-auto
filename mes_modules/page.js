

var page = {
    v1 : (req, res) =>{
        res.render("./v1.html");
    },
    v2 : (req, res) =>{
        res.render("./v2.html");
    },
    v3 : (req, res) =>{
        res.render("./v3.html");
    },
    v4 : (req, res) =>{
        res.render("./v4.html");
    },
    v5 : (req, res) =>{
        res.render("./v5.html");
    },
    v6 : (req, res) =>{
        res.render("./v6.html");
    },
    v7 : (req, res) =>{
        res.render("./v7.html");
    },
    v8 : (req, res) =>{
        res.render("./accueil.html");
    },
    v9 : (req, res) =>{
        res.render("./v9.html");
    },
    v10 : (req, res) =>{
        res.render("./garantie_achat");
    },
    v11: (req, res) =>{
        res.render("./reservation_essai.html");
    },
    v12: (req, res) =>{
        res.render("./contacts.html");
    },
    v13 : (req, res) =>{
        res.render("./presentation.html");
    }
}

module.exports = page;