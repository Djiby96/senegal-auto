// Ce fichier va nous permettre de faire le traitement de quelques donnes

// Exportations des modules
const fs = require("fs");

// Mes modules
const getting = require("./data_form.js");

// Initialisation de nos modules
var get = new getting();

class DataTreat{
    constructor(){

    }
    // Fonction permettant le telechargement des donneessss
    static uploadFile(files){
        var k = 0,
        date = get.getDate("_"), 
        nombre_photos = files.length, 
        numero_voiture = get.getReference(),
        fileName = date+"_"+numero_voiture+"_1",
        file_ext = fileName+".jpg",
        chemin = "/our_vehicule/"+file_ext,
        data_img_upload = [fileName, chemin, nombre_photos, numero_voiture], 
        data_table_image = [data_img_upload];
        for(let i = 0; i<nombre_photos;i++){
            try {
                k++;
                let new_file_ext = date+"_"+numero_voiture+"_"+k+".jpg",
                    new_destination = "./img/our_vehicule/"+new_file_ext;
                fs.createWriteStream(new_destination).write(files[i].buffer);
            } catch (error) {
                // nothing to do
            }
        }
        data_table_image.push(k);

        return data_table_image;
    }

}

module.exports = DataTreat;