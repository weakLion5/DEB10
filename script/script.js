function notyet() {
    alert("Maaf untuk saat ini dalam masa pengerjaan!");
}

function updateClock() {
            const clockElement = document.getElementById("clock");
            const now = new Date();

            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");

            let amOrPm = "AM";
            let adjustedHours = hours;

            if (now.getHours() >= 12) {
                amOrPm = "PM";
                if (now.getHours() > 12) {
                    adjustedHours = String(now.getHours() - 12).padStart(2, "0");
                }
            }

            const timeString = `${adjustedHours}:${minutes}:${seconds} ${amOrPm}`;
            clockElement.textContent = timeString;
        }

        setInterval(updateClock, 1000);

        updateClock();

          function getGreeting() {
            const now = new Date();
            const hours = now.getHours();

            let greeting = "Selamat pagi";

            if (hours >= 12 && hours < 15) {
                greeting = "Selamat siang";
            } else if (hours >= 15 && hours < 18) {
                greeting = "Selamat sore";
            } else if (hours >= 18 && hours < 24) {
                greeting = "Selamat malam";
            }

            return greeting;
        }

        function updateMessage() {
            const messageElement = document.getElementById("message");
            const greeting = getGreeting();
            const phoneNumber = "6289502733339";
            const text = encodeURIComponent(`${greeting} kak`);

            const whatsappLink = `https://wa.me/${phoneNumber}?text=${text}`;
            const whatsappAnchor = document.getElementById("whatsapp-link");
            whatsappAnchor.href = whatsappLink;

            messageElement.innerHTML = `<a id="whatsapp-link" href="${whatsappLink}" target="_blank">+62 895 0273 3339</a>`;
        }

        updateMessage();

console.log("Web Created by : Syarief Rangga Nirwana");
console.log("Web Created date : Rabu, 15 Maret 2023");