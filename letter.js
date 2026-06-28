const paper = document.getElementById("paper");
const letter = document.getElementById("letterText");
const next = document.getElementById("nextLetter");

gsap.fromTo(
    ".paper",
    {
        opacity: 0,
        y: 80
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }
);

const text = `Hai sayang.

Aku tau akhir-akhir ini kita lagi gak baik-baik aja.

Jujur, aku gak bikin web ini buat maksa kamu.

Aku cuma pengen kamu tau...

Kalau selama 3 bulan ini,
aku bener-bener bahagia bisa kenal sama kamu.

Maaf kalau selama ini aku masih sering bikin kamu kesel.

Semoga setelah ini,
kita bisa ngobrol lagi.

Aku kangen.

- ndut`;

let index = 0;

function typing() {

    if (index < text.length) {

        const char = text.charAt(index);

        if (char === "\n") {

            letter.innerHTML += "<br>";

        } else {

            letter.innerHTML += char;

        }

        index++;

        setTimeout(typing, 28);

    }

}

setTimeout(() => {

    typing();

}, 800);

next.addEventListener("click", () => {

    gsap.to("body", {

        opacity: 0,

        duration: 0.8,

        onComplete() {

            window.location.href = "ending.html";

        }

    });

});
const music = document.getElementById("bgMusic");

if (music) {

    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {

        music.currentTime = Number(savedTime);

    }

    music.play().catch(() => {});

    setInterval(() => {

        localStorage.setItem("musicTime", music.currentTime);

    }, 500);

}