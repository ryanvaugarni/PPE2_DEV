document.addEventListener('DOMContentLoaded',()=>{
    console.log("vous êtes connecté");

let date, foot
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | All rights reserved for educational purposes only`

/*FORM*/
let user = ({
    el : document.querySelector('input[type="email"]'),
    login: "ryan.vaugarni@gmail.com",
    mdp: 2022,
})
    console.log(user.el)
    localStorage.setItem("email", user.login)
    localStorage.setItem("mdp", user.mdp)
    user.el.value == user.login ? console.log("connexion réussie") : console.log("connexion échouée")
});