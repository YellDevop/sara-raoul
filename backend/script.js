document.addEventListener("DOMContentLoaded", function () {
    // Countdown
    const weddingDate = new Date("May 17, 2025 17:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
        } else {
            document.querySelector(".countdown-container").innerHTML = `
                <h2>È il giorno del matrimonio!</h2>
            `;
        }
    }

    setInterval(updateCountdown, 1000);
});

// Amount Selection
document.querySelectorAll('.amount-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('custom-amount').value = button.dataset.value;
    });
});
