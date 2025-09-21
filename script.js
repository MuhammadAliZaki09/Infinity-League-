const countdownEl = document.getElementById("countdown");

const targetDate = new Date();

targetDate.setDate(targetDate.getDate() + 19); // 19 days until registration opens

function updateCountdown() {

  const now = new Date().getTime();

  const distance = targetDate - now;

  if (distance < 0) {

    countdownEl.innerHTML = "✅ Registration is OPEN!";

    return;

  }

  const days = Math.floor(distance / (1000*60*60*24));

  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

  const seconds = Math.floor((distance % (1000*60)) / 1000);

  countdownEl.innerHTML = `🕒 Registration opens in ${days}d ${hours}h ${minutes}m ${seconds}s`;

}

setInterval(updateCountdown, 1000);

updateCountdown();