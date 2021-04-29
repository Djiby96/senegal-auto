


var route = {
    connexion_administrator: (req, res)=>{
        var cookie_senegal_auto ={
            name: "Senegal auto"
        }
        res.cookie("cookie_senegal_auto", cookie_senegal_auto, {httpOnly:false})
        res.render("administrator_connect.html", {
            data_connect_error:null,
            server_error:null
        });

        console.log(req.cookies);
    },

    entreprise_presentation:(req, res)=>{
        res.render("presentation.html");
    },

    add_car_page:(req, res)=>{
        var cookie_connexion = req.cookies.cookie_connexion;
        if(cookie_connexion){
            res.render("./add_car.html", {
                message: null
            });
        }else{
            res.redirect("/connect-administrator");
        }
    },

    contact:(req, res)=>{
        res.render("./contacts.html", {
            firstname: null,
            lastname: null,
            phone_number: null,
            email: null,
            message: null
        });
    },

    reservation_essai: (req, res) =>{
        res.render("./reservation_essai.html");
    },

    garantie_achat: (req, res) =>{
        res.render("./garantie_achat.html");
    }
   
}

module.exports = route;