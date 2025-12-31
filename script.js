const button = document.getElementById("openBtn");
const envelope = document.querySelector(".envelope");
const recipientText = document.getElementById("recipient");
const messageText = document.getElementById("message");

/* 💌 LETTER DATABASE */
const letters = {
    frances: {
        name: "Dear Anna 💕",
        message: "May this year bring you peace, laughter, and endless love ✨"
    },
    gian: {
        name: "Dear John 💙",
        message: "New year, new wins, and happiness ahead 🎉"
    },
    kylie: {
        name: "Dear Maria 🌸",
        message: "May your dreams bloom beautifully this year 💐"
    },
    jelianne: {
        name: "Dear Maria 🌸",
        message: "May your dreams bloom beautifully this year 💐"    
    },
    carl: {
        name: "Dear Maria 🌸",
        message: "May your dreams bloom beautifully this year 💐"
    },
    lyka: {
        name: "Dear Maria 🌸",
        message: "May your dreams bloom beautifully this year 💐"
    },
    chester: {
        name: "Dear Maria 🌸",
        message: "May your dreams bloom beautifully this year 💐"
    },
    trixie: {
        name: "Dear Maria 🌸",
        message: "May your dreams bloom beautifully this year 💐"
    },
    nath: {
        name: "Dear Maria 🌸",
        message: "May your dreams bloom beautifully this year 💐"
    },
    lizha: {
        name: "Dear Maria 🌸",
        message: "May your dreams bloom beautifully this year 💐"
    },    
};

/* 🔗 GET RECIPIENT FROM LINK */
const params = new URLSearchParams(window.location.search);
const user = params.get("to");

if (letters[user]) {
    recipientText.textContent = letters[user].name;
    messageText.textContent = letters[user].message;
} else {
    recipientText.textContent = "Dear You 💖";
    messageText.textContent = "Wishing you a joyful and loving New Year ✨";
}

/* ✉️ OPEN ENVELOPE */
button.addEventListener("click", () => {
    envelope.classList.toggle("open");
    createHearts();
});

/* 💖 HEART ANIMATION */
function createHearts() {
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "💗";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight - 80 + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }
}