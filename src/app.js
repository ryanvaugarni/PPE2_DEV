document.addEventListener('DOMContentLoaded',()=>{
    console.log("vous êtes connecté");

let date, foot
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | All rights reserved for educational purposes only`

/*FORM*/
let el2 = document.querySelector(".form p");
let btn, email, mdp;
btn = document.getElementsByTagName("input")[2];
email = document.getElementsByTagName("input")[0].value;
mdp = document.getElementsByTagName("input")[1].value;
btn.addEventListener("click", e => {
    e.preventDefault();
    Formulaire();
});
let Formulaire = () => {
    btn = document.getElementsByTagName("input")[2];
    email = document.getElementsByTagName("input")[0].value;
    mdp = document.getElementsByTagName("input")[1].value;
    console.log(email, mdp);
    if (email === "" || mdp === "") {
        el2.innerText = "Veuillez remplir tous les champs ";
        el2.classList.remove("success");
        el2.classList.add("warning");
    } else {
        el2.innerText = "Votre formulaire a bien été envoyé";
        el2.classList.remove("warning");
        el2.classList.add("success");
        localStorage.setItem("user", email + " | " + mdp);
        sessionStorage.setItem("user", "sessionid");

    }
};
});