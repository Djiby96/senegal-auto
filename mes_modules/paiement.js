

var crypto = require("crypto");
var paydunya = require("paydunya");

var {setup, store} = require("./paydunya_config.js");

var paiement = {
    redirection_paiement: (req, res) =>{
        var invoice = new paydunya.CheckoutInvoice(setup, store);
        invoice.addItem('ACHAT CREDIT COMPTE', 1, 10000, 10000);

        invoice.totalAmount = 10000;

        invoice.create()
        .then(function (){
            res.redirect(invoice.url);
            // console.log(invoice.status);
            // console.log(invoice.token); // Token de facture
            // console.log(invoice.responseText);
            // console.log(invoice.url); // URL de redirection de paiement de facture PayDunya
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
    }
}

module.exports = paiement;