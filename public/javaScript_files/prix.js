

class Prix{
   
    static prixFormat(prix){
        prix=prix.toString();
        var taille = prix.length;

        if(taille>1 && taille<=3){
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