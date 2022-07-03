// On initialise les messages
let welcome = "<p>Bienvenue sur mon Portfolio,<br /> Appelez-moi Micka, développeur web junior, à la recherche d'une opportunité de faire de ma passion mon métier 🔥</p>";
let nav = "<p>N'hésitez pas à naviguer où bon vous semble, je ne bouge pas, je reste là pour vous accompagner 🦍</p>"
let profileMsg = "<p>Vous êtes sur le point d'en connaitre un peu plus sur moi... Êtes-vous sûr d'être prêt à relever ce dévi? 😈</p>";
let educationMsg = "<p>Eh oui, j'ai été à l'école. J'y ai appris la valeur de beaucoup de choses dans la vie, c'est ce qui me représente aujourd'hui 🤖</p>";
let careerMsg = "<p>Choisissez un travail que vous aimez, et vous n'aurez pas à travailler un seul jour de votre vie 🍀</p>";

document.querySelector('#bubble').innerHTML = welcome;

function profilView() {

    const containerProfile = document.querySelector('#profil-nav');

    // Si on clique sur le bouton
    containerProfile.addEventListener('click', event => {
        console.log('Tu as cliqué sur mon profil, la suite va arriver prochainement.');
    });

    // Si on survole le bouton
    containerProfile.addEventListener('mouseover', event => {
        document.querySelector('#bubble').innerHTML = profileMsg;
    });

    // Si on sort du bouton
    containerProfile.addEventListener('mouseout', event => {
        document.querySelector('#bubble').innerHTML = nav;
    });
}

function educationView() {

    const containerEducation = document.querySelector('#education-nav');

    // Si on clique sur le bouton
    containerEducation.addEventListener('click', event => {
        console.log('Tu as cliqué sur mon parcours, la suite va arriver prochainement.');
    });

    // Si on survole le bouton
    containerEducation.addEventListener('mouseover', event => {
        document.querySelector('#bubble').innerHTML = educationMsg;
    });

    // Si on sort du bouton
    containerEducation.addEventListener('mouseout', event => {
        document.querySelector('#bubble').innerHTML = nav;
    });
}

function careerView() {

    const containerCareer = document.querySelector('#career-nav');

    // Si on clique sur le bouton
    containerCareer.addEventListener('click', event => {
        console.log('Tu as cliqué sur mon parcours, la suite va arriver prochainement.');
    });

    // Si on survole le bouton
    containerCareer.addEventListener('mouseover', event => {
        document.querySelector('#bubble').innerHTML = careerMsg;
    });

    // Si on sort du bouton
    containerCareer.addEventListener('mouseout', event => {
        document.querySelector('#bubble').innerHTML = nav;
    });
}

profilView();
educationView();
careerView();