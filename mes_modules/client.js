
//Exportations de mes modules
const mysql = require("./mysql_connect.js");
const dataForm = require("./data_form.js");

//initialisation des modules
const con = new mysql();
const time = new dataForm();

const Client = {
    // Enregistrer les messages envoyees a l' entreprise par le Client
    sendMessage:(req, res)=>{
        var data_message = req.body,
            date = time.getDate("/"),
            local_time = time.getTime(),
            message_data = [[data_message.user_name, data_message.email_telephone_user, data_message.message, date, local_time]];
            
        var request_to_save_message = "INSERT INTO contacts(utilisateur, coordonnees, message, date, heure) VALUES ?";
        con.query(request_to_save_message, [message_data], (err, rs)=>{
            let cookie_message = {
                name_value: data_message.user_name,
                email_tel_value:data_message.email_telephone_user
            }
            if(err){
                cookie_message.message = "server problem";
                res.cookie("message", cookie_message, {httpOnly:true});
                res.redirect("/contacts");
            }else{
                cookie_message.message = "message save";
                res.cookie("message", cookie_message, {httpOnly:true});
                res.redirect("/contacts");
            }
        });
    }
} 
module.exports = Client;