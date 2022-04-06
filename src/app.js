document.addEventListener('DOMContentLoaded',()=>{
    console.log("vous êtes connecté");

let date, foot
    date = new Date();
    foot = document.querySelector("footer p");
    foot.innerText += `${date.getFullYear()} - Ryan Vaugarni | All rights reserved for educational purposes only`

/*FORM*/
let user = ({
    btn: document.querySelector(".btn_validate"),
    lo : document.querySelector('input[type="email"]'),
    login: "ryan.vaugarni@gmail.com",
    mdp: 2022,
})
    console.log(user.btn)
    localStorage.setItem("email", user.login)
    localStorage.setItem("mdp", user.mdp)
    user.btn.addEventListener("click",(e)=>{
        e.preventDefault();
        user.lo.value == user.login ? console.log("connexion réussie") : console.log("connexion échouée")
    })
    
});