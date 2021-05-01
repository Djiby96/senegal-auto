

var crypto = require("crypto");
var paydunya = require("paydunya");

var {setup, store} = require("./paydunya_config.js");

var invoice = new paydunya.CheckoutInvoice(setup, store);

var paiement = {
    redirection_paiement: (req, res) =>{        
        invoice.description = "Facile, rapide et securise pour crediter votre compte Teranga-Dakar.";

        invoice.totalAmount = 10000;

        invoice.create()
        .then(function (){
            res.redirect(invoice.url);
            console.log(invoice.status);
            console.log(invoice.token); // Token de facture
            console.log(invoice.responseText);
        })
        .catch(function (e) {
           console.log(e);
        });
    },

    evaluate: (req, res) =>{
        var status = req.body.data.status || "NOT EVALUATED";
        var amount = req.body.data.invoice.total_amount || 50000;
        res.render("./final.html", {
            status: status,
            amount: amount
        });
    },

    finalEvaluate: (req, res) =>{
        var token = req.query.token;
        if(!token){
            res.redirect('/');
        }else{
            invoice.confirm(token)
            .then(function(){
                var status = invoice.status;
                if(status != "completed"){
                    res.send(status.toString());
                }else{
                    var amount = invoice.total_amount;
                    var user = invoice.customer;
                    var facture_link = invoice.receiptURL;
                    // var hash = invoice.hash;

                    res.render("./final.html", {
                        status: status,
                        amount: amount,
                        user: user,
                        facture_link: facture_link
                    });
                }

            })
            .catch(function(e){
                res.send(e.toString());
            });

        }
    }
}

module.exports = paiement;