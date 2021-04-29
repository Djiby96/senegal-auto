

const img_voiture = document.querySelectorAll(".img_voiture"),
      button_consulter = document.querySelectorAll(".button_consulter"),
      img_location_tarif = document.getElementById("img_location_tarif"),
      container_price_location = document.getElementById("container_price_location"),

liste_regions = new Map([[0, "Dakar"], [1, "Thies"], [2, "Diourbel"], [3, "Kaolack"], [4, "Saint-Louis"], [5, "Louga"], [6, "Fatick"], 
                         [7, "Tamba"], [8, "Kolda"], [9, "Matam"], [10, "Kaffrine"], [11, "Ziguinchor"], [12, "Sedhiou"], [13, "Kedougou"]
                        ]);        

for(let i = 0; i < button_consulter.length; i++) {
    button_consulter[i].addEventListener("click", () =>{
        var url_voiture = img_voiture[i].getAttribute("src");
        img_location_tarif.setAttribute("src", url_voiture);
        var tarif_location = button_consulter[i].getAttribute("tarifs");

        if(tarif_location == "0-0-0-0-0-0-0-0-0-0-0-0-0-0"){
            container_price_location.innerHTML = "<h5 class='font-weight-bold' style='color: orangered; font-size: 1rem; margin-bottom: 2rem;'>Prix sur demande</h5>"
        }else{
            var tableau_prix_location = tarif_location.split("-");
            var k = -1;
            container_price_location.innerHTML = tableau_prix_location.map((item) =>{
                if(item == "0" || item == null || item == ""){
                    var prix_location = "Prix sur demande";
                }else{
                    prix_location = Prix.prixFormat(item) + " F CFA/J";
                }
                k++;
                return `
                        <div class="d-flex justify-content-start mb-2">
                            <span class="region mr-3" style="width: 6rem">${liste_regions.get(k)} : </span>
                            <span class="prix_par_region font-weight-bold">${prix_location}</span>
                        </div>
                       ` 
            }).join("");
        }

        tarifs_location_voiture.classList.add("show_tarifs_location_voiture");
    });   
}

const window_close = document.getElementById("window_close"),
      tarifs_location_voiture = document.querySelector(".tarifs_location_voiture");

window_close.addEventListener("click", ()=>{
    tarifs_location_voiture.classList.remove("show_tarifs_location_voiture");
});      