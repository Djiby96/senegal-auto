

class dataForm{
    constructor(){

    }
    //creation code reference pour les publications
    getReference(){
        var x = Date.now();
        var y = Math.random().toString().substring(2);
            y = parseInt(y);
        var reference = (x*y).toString().substring(2, 6);
        return reference;
    }

    //la date de nommation des fichiers entre
    getDate(separation){
        var date = new Date();
        var j= date.getDate().toString(),
            m= (date.getMonth()+1).toString(),
            a=date.getFullYear().toString();
        if(j.length===1){
            j="0"+j;
        }if(m.length===1){
            m="0"+m;
        }
        var la_date= j+separation+m+separation+a;
        return la_date;
    }
    // Date dans une format lisible ex : 20 Janvier 2020
    date_lisible_format(date){
        var day = date.substring(0, 2),
            month_number = date.substring(3, 5),
            year = date.substring(6, 10);

        const Date_Month_Key = new Map([["01", "Janvier"], ["02", "Fevrier"], ["03", "Mars"], ["04", "Avril"], ["05", "Mai"], ["06", "Juin"], ["07", "Juillet"], ["08", "Août"], ["09", "Septembre"], ["10", "Octobre"], ["11", "Novembre"], ["12", "Decembre"]]);    
        var month = Date_Month_Key.get(month_number);

        var date_format = day+" "+month+" "+year;

        return date_format;
    }
      //l'heure d'envoie du message dans la rubrique envoyez-nous une suggestion
    getTime(){
        var date = new Date();
        var heure= date.getHours().toString(); //l'heure
        var minute= date.getMinutes().toString();//a la minute
        if(heure==="0"){
            heure="00";
        }
        if(heure.length===1 && heure!="0"){
            heure="0"+heure;
        }
        if(minute==="0"){
            minute="00";
        }
        if(minute.length===1 && minute!="0"){
            minute = "0"+minute;
        }

        var time = heure+":"+minute;
        return time;
    }

    prix_visible_format(prix){
        prix=prix.toString();
        var taille = prix.length;
        if(taille>=1 && taille<=3){
            return prix;
        }else if(taille===4){
            prix=prix[0]+" "+prix.substring(1);
        }else if(taille===5){
            prix =prix.substring(0, 2)+" "+prix.substring(2);
        }else if(taille===6){
            prix=prix.substring(0, 3)+" "+prix.substring(3);
        }else if(taille===7){
            prix=prix[0]+" "+prix.substring(1, 4)+" "+prix.substring(4);
        }else if(taille===8){
            prix=prix.substring(0,2)+" "+prix.substring(2, 5)+" "+prix.substring(5);
        }else if(taille===9){
            prix=prix.substring(0, 3)+" "+prix.substring(3, 6)+" "+prix.substring(6);
        }else if(taille===10){
            prix=prix[0]+" "+prix.substring(1, 4)+" "+prix.substring(4, 7)+" "+prix.substring(7);
        }else if(taille===11){
            prix=prix.substring(0, 2)+" "+prix.substring(2, 5)+" "+prix.substring(5, 8)+" "+prix.substring(8);
        }else if(taille===12){
            prix=prix.substring(0, 3)+" "+prix.substring(3, 6)+" "+prix.substring(6, 9)+" "+prix.substring(9);
        }else{
            prix = null;
        }
        return prix;
    }
}

module.exports = dataForm;