const weddingDate = new Date(2025, 3, 14, 12, 0, 0).getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = weddingDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;

      if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "<h2>O grande dia chegou!</h2>";
      }
    }

    const interval = setInterval(updateCountdown, 1000);