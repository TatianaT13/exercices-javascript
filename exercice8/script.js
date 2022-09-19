const nomObjet = ['Une chaise gaming', 'Un costume d\'Halloween', 'Un barbecue', 'Une guitare', 'Un sac à main'];
const imageObjet = ['chaise.png', 'costume-haloween.png', 'grill.png', 'guitare.png', 'sac-a-main.png'];
let prixPropose;
let prixMystere;
let nbreAleatoire;
let compteurTentative;
let image = document.getElementById('objet');
let nomImage = document.getElementById('nom-objet');
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

let affichageTentative = document.getElementById('nbre-tentative');

function genererUnChiffre(valeurMax) {
    return Math.floor(Math.random() * Math.floor(valeurMax));
}
prixMystere = genererUnChiffre(100) + 1;
nbreAleatoire = genererUnChiffre(5);

function afficherImage(valeur) {
    return '<img src="images/' + valeur + '"class="img-fluid" width="30%" alt="Responsive image">';
}
image.innerHTML = afficherImage(imageObjet[nbreAleatoire]);
nomImage.innerHTML = nomObjet[nbreAleatoire];
compteurTentative = 10;
affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";

function verifierProposition(){
    prixPropose = document.getElementById('prix-propose').value;
    if(compteurTentative == 0){
        affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";
        message.innerHTML = "Désolé, vous avez perdu !<br> Le juste prix était de " + prixMystere + " euros";
        bouton.disabled = true;
    }else{
        if(prixPropose > prixMystere){
            message.innerHTML = "c'est moins !";
            compteurTentative--;
            affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";
        }
        if(prixPropose < prixMystere){
            message.innerHTML = "c'est plus !";
            compteurTentative--;
            affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";
        }
        if(prixPropose == prixMystere){
            message.innerHTML = "Bravo! Vous avez gagné !";
            compteurTentative--;
            affichageTentative.innerHTML = "En " + compteurTentative + " tentatives...";
        }
    }
}
bouton.addEventListener('click', verifierProposition, false);