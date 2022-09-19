let mdpSaisi;
let regexMaj = new RegExp("[A-Z]");
let regexMin = new RegExp("[a-z]");
let regexChiffre = new RegExp("[0-9]");
let regexSpecial = new RegExp("\\W");
let compteurForce;
let message = document.getElementById('message');

function verifierProposition(){

    compteurForce = 0;
    mdpSaisi = document.getElementById('mdp').value;

    if(regexMaj.test(mdpSaisi)){
        compteurForce = compteurForce + 1;
    }
    if(regexMin.test(mdpSaisi)){
        compteurForce = compteurForce + 1;
    }
    if(regexChiffre.test(mdpSaisi)){
        compteurForce = compteurForce + 1;
    }
    if(regexSpecial.test(mdpSaisi)){
        compteurForce = compteurForce + 1;
    }
    if(mdpSaisi.length < 8){
        compteurForce = compteurForce - 1;
    }
    switch (compteurForce) {
        case 4:
            message.innerHTML = '<span class="text-success">Très sécurisé !</span>';
            break;
        case 3:
            message.innerHTML = '<span class="text-success">Sécurisé !</span>';
            break;
        case 2:
            message.innerHTML = '<span class="text-success">Moyen !</span>';
            break;
        case 1:
            message.innerHTML = '<span class="text-success">Dangereux !</span>';
            break;
        case 0:
            message.innerHTML = '<span class="text-success">Dangereux !</span>';
            break; 
        default:
            message.innerHTML = ' ';                 
    }
}
document.getElementById('mdp').addEventListener('keyup', verifierProposition, false);