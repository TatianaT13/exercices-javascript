let ageSaisi;
let genreSaisi;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function verifierImposition(){
    //récupérer la valeur de l'âge et du genre avec la fonction .value.
    ageSaisi = document.getElementById('age-saisi').value;
    genreSaisi = document.getElementById('genre-saisi').value;
    // notre condition: si âge >= 18 et Homme alors, ou si femme et âge >=20
if(genreSaisi == "H" && ageSaisi >= 18){
    message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable!</div>';
}else if((genreSaisi == "F" && ageSaisi >=20) || (genreSaisi == "F" && ageSaisi <=18 && ageSaisi <= 35)){
    message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable!</div>';
}else{
    message.innerHTML = '<div class="alert alert-success" role="alert">Vous êtes non imposable!</div>';
    }
}
//ajout d'un écouteur d'évenement sur le bouton qui au click appelera la fonction verifierImposition();
bouton.addEventListener('click', verifierImposition, false);

