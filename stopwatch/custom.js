function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;

    if (h > 12){
        document.getElementById('hours').textContent = h - 12;
        document.getElementById('format').innerText = "P.M";
    }
    else{
        document.getElementById('format').innerText = "A.M";
    }
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }