
//Exportations des autres modules
var mysql = require("./mysql_connect.js");

//initialiation des modules
const con = new mysql();

var message = {
    sendMessage : (req, res)=>{
        var sms = [[req.body.firstname, req.body.lastname, parseInt(req.body.phone_number), req.body.email, req.body.message]];
        var insert_message = "INSERT INTO message(prenom, nom, telephone, email, message) VALUES ?";
        con.query(insert_message, [sms], (err, rs)=>{
            if(err){
                //console.log(err);
                req.flash("error_message", "Message non envoye")
            }else{
                console.log(rs);
                req.flash("success_message", "Message envoye avec succes !")

                /* Pour teranga-senegal */
                //req.flash("messages", "type/result/message") :type ="simple/alert/flash", result="success/error/advertisement", message="le message"
            }
            res.redirect("/contacts");
        });

    }
}

module.exports = message;