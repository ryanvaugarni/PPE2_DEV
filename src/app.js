document.addEventListener('DOMContentLoaded',()=>{
    console.log("vous êtes connecté");

    let date, foot
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | Tous droits réservés | PPE2_DEV`

});