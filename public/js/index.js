// On génère l'heure actuelle qui s'actualise toutes les secondes
const clock = function() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
  
    if (sec < 10) {
        sec = '0' + sec;
    }
  
    if (min < 10) {
        min = '0' + min;
    }
  
    let displayHour = hour + ":" + min + ":" + sec;
  
    document.querySelector("#clock").innerText = displayHour;
}
  
  window.setInterval(clock, 1000);



// On génère la date exact du jour
    const date = function() {
    const dateDay = new Date();
    let dateLocale = dateDay.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    document.querySelector("#date").innerHTML = dateLocale;
}

window.setInterval(date, 1000);