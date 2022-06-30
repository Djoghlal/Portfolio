const clockDay = function() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
  
    if (sec < 10) {
        sec = '0' + sec;
    }
  
    if (min < 10) {
        min = '0' + min;
    }

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    if (month < 12) {
        month = month + '1';
    }
  
    let displayHour = hour + ":" + min + ":" + sec;
    let displayDate = day + "/" + month + "/" + year;
  
    document.querySelector("#clock").innerText = displayHour;
    document.querySelector("#date").innerText = displayDate;
  };
  
  window.setInterval(clockDay, 1000);