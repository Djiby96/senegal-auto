
/* -- EXPORTATION DES MES PROPRES MODULES --*/
var mysql = require("./mysql_connect.js");

/* initialiation des modules */
const con = new mysql();


var vos_messages = {
    /* -- Recherche et renvoie des messages --*/
    messagesClients : (req, res, position) =>{
        var select_line_count = "SELECT COUNT(*) from message",
        select_messages = "SELECT id_message, UPPER(LEFT(LTRIM(prenom), 1)) AS 'first_letter', CONCAT(prenom, ' ', nom) AS 'name', CONCAT(SUBSTRING(telephone, 1, 2), ' ', SUBSTRING(telephone, 3, 3), ' ', SUBSTRING(telephone, 4, 2), ' ', SUBSTRING(telephone, 8, 2)) AS 'telephone', "+
                          "DATE_FORMAT(date, '%H:%i') AS 'heure', email, message, "+
                          "CASE"+
                          "    WHEN DATEDIFF(NOW(), date) = 0 THEN ?"+ 
                          "    WHEN DATEDIFF(NOW(), date) = 1 THEN ?"+ 
                          "    ELSE DATE_FORMAT(date, '%d/%m/%Y')"+
                          "END AS 'date_message'"+
                          "FROM message ORDER BY date DESC LIMIT "+position*30+", 40;";
        request = select_line_count + ";" + select_messages;
     
     con.query(request, ["Aujourd'hui", "Hier"], (err, rs) =>{
         if(err){
            //console.log(err);   
         }else{
            var lines_count = rs[0][0]['COUNT(*)'];
            var messages = rs[1];
            var messages_count = messages.length;
            if(lines_count > messages_count){
                var numero_suivant = position + 1;
                res.render("./vos_messages.html", {
                    lines_count: lines_count,
                    messages_count: messages_count,
                    messages : messages,
                    numero_suivant : numero_suivant
                });
            }else{
                res.render("./vos_messages.html", {
                     lines_count: lines_count,
                     messages_count: messages_count,
                     messages : messages,
                     numero_suivant: null
                });
            }
         }
     });   
    },

    /* -- Route de la page '/admin/vos-messages' --*/
    pageMessagesClients : (req, res) =>{
        var cookie_connexion = req.cookies.cookie_connexion;
        if(cookie_connexion){
            var params = req.params;
            var params_value = Object.keys(params)
            if(params_value.length == 0){
                vos_messages.messagesClients(req, res, 0)
            }else{
                var partie = parseInt(params.numero_partie);
                vos_messages.messagesClients(req, res, partie);
            }

        }else{
            res.redirect("/connect-administrator");
        }
    }
}


module.exports = vos_messages;