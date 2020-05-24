/* VARIABLES MENU BURGER */
let boutonBurger = document.querySelector('.boutonBurger');
let menuBurger = document.querySelector('.menuBurger');

/* MENU BURGER */
boutonBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('menuBurgerOpen');
})

/* VARIABLES CARTE PRINCIPALE */
let carte = document.querySelector('.carte');
let input = document.querySelector('.inputName');
let validName = document.querySelector('.validName');
let para = document.querySelector('.para');
let input1 = document.querySelector('.input1');
let bouton1 = document.querySelector('.bouton1');
let titre = document.querySelector('.titre>h1');

/* VARIABLES INFOS JOUEUR */
let namePlayer = document.querySelector('.namePlayer');
let xpPlayer = document.querySelector('.xpPlayer');
let supprPlayer = document.querySelector('.supprPlayer');
let erreur = document.querySelector('.erreur>p');
playerXP = 0;

/* VARIABLES CARTE SUPPR */
let carteSuppr = document.querySelector('.carteSuppr');
let validSuppr = document.querySelector('.validSuppr');
let retourSuppr = document.querySelector('.retourSuppr');

/* VARIABLES JEUX */
let boutonJeu1 = document.createElement('div');
boutonJeu1.classList.add('boutonJeu');
boutonJeu1.innerHTML = "<a href='#'>Hasard Combat</a>";

let boutonJeu2 = document.createElement('div');
boutonJeu2.classList.add('boutonJeu');
boutonJeu2.innerHTML = "<a href='#'>Quiz Bok</a>";


/* CHARGEMENT DE LA PAGE */
if (localStorage.getItem('pseudo')) {
    titre.innerHTML = "Bonjour " + localStorage.getItem('pseudo');
    namePlayer.innerHTML = "Nom : " +  localStorage.getItem('pseudo');
    xpPlayer.innerHTML = "EXP : " + localStorage.getItem('xp');
    para.innerHTML = "Choisissez un jeu : ";
    input1.style.display = "none";
    bouton1.style.display = "none";
    carte.appendChild(boutonJeu1);
    carte.appendChild(boutonJeu2);
} else {
    titre.innerHTML = "Bonjour Inconnu";
    namePlayer.innerHTML = "Nom : Inconnu";
    xpPlayer.innerHTML += "EXP : 0";
}

/* ENTRER UN PSEUDO */
validName.addEventListener('click', function() {
    if (input.value == "") {
        erreur.innerHTML = "Entrez un pseudo j'ai dis !";
    } else {
        erreur.innerHTML = "";
        localStorage.setItem('pseudo', input.value);
        localStorage.setItem('xp', playerXP);
        titre.innerHTML = "Bonjour " + localStorage.getItem('pseudo');
        namePlayer.innerHTML = "Nom : " + localStorage.getItem('pseudo');
        xpPlayer.innerHTML = "EXP : " + localStorage.getItem('xp');
        para.innerHTML = "Choisissez un jeu : ";
        input1.style.display = "none";
        bouton1.style.display = "none";
        carte.appendChild(boutonJeu1);
        carte.appendChild(boutonJeu2);
        input.value = "";
    }
})

/* SUPPRIMER JOUEUR */
supprPlayer.addEventListener('click', function() {
    carteSuppr.style.left = "40px";
    
})

validSuppr.addEventListener('click', function() {
    localStorage.clear();
    window.location.reload();
})

retourSuppr.addEventListener('click', function() {
    carteSuppr.style.left = "-300px";
})