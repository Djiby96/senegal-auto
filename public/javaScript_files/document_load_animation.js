
// 1. CACHER L'ANIMATION DE CHARGEMENT LORSQUE LE DOCUMENT EST COMPLETEMENT CAHRGEE

const animation_load = document.getElementById("animation_load");

window.addEventListener('load', () =>{
    animation_load.style.display = "none";
});