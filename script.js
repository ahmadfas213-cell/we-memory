const loading = document.getElementById("loading");
const cursor = document.getElementById("cursor");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const startButton = document.getElementById("startButton");
const musicButton = document.getElementById("musicButton");
const intro = document.getElementById("intro");
const music = document.getElementById("backgroundMusic");

window.addEventListener("load", () => {

    gsap.to("#loading", {

        opacity: 0,

        duration: 0.8,

        delay: 1.2,

        onComplete() {

            loading.style.display = "none";

            typingTitle();

        }

    });

});

const titleText = "Hai sayang";

let titleIndex = 0;

function typingTitle() {

    if (titleIndex < titleText.length) {

        title.innerHTML += titleText.charAt(titleIndex);

        titleIndex++;

        setTimeout(typingTitle, 130);

    } else {

        setTimeout(typingSubtitle, 500);

    }

}

const subtitleText = `sebenernya...

aku agak bingung harus mulai dari mana.

jadi yaudah,

aku bikin ini buat kamu.`;

let subtitleIndex = 0;

function typingSubtitle() {

    if (subtitleIndex < subtitleText.length) {

        const char = subtitleText.charAt(subtitleIndex);

        if (char === "\n") {

            subtitle.innerHTML += "<br>";

        } else {

            subtitle.innerHTML += char;

        }

        subtitleIndex++;

        setTimeout(typingSubtitle, 28);

    }

}

document.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {

        x: e.clientX,

        y: e.clientY,

        duration: 0.15

    });

});

startButton.addEventListener("mouseenter", () => {

    gsap.to(cursor, {

        width: 70,

        height: 70,

        opacity: 0.35,

        duration: 0.2

    });

});

startButton.addEventListener("mouseleave", () => {

    gsap.to(cursor, {

        width: 26,

        height: 26,

        opacity: 0.7,

        duration: 0.2

    });

});

let playing = false;

musicButton.addEventListener("click", () => {

    if (!playing) {

        music.play().catch(() => {});

        playing = true;

        musicButton.innerHTML = "❚❚";

    } else {

        music.pause();

        playing = false;

        musicButton.innerHTML = "♪";

    }

});

startButton.addEventListener("click", () => {

    gsap.to(".hero", {

        opacity: 0,

        y: -30,

        duration: 0.6

    });

    gsap.to("#intro", {

        display: "flex",

        opacity: 1,

        duration: 0.5

    });

    setTimeout(() => {

        window.location.href = "pages/timeline.html";

    }, 1800);

});

gsap.to(".blob1", {

    x: 70,

    y: 40,

    repeat: -1,

    yoyo: true,

    duration: 8,

    ease: "sine.inOut"

});

gsap.to(".blob2", {

    x: -90,

    y: -30,

    repeat: -1,

    yoyo: true,

    duration: 10,

    ease: "sine.inOut"

});

gsap.to(".blob3", {

    scale: 1.2,

    repeat: -1,

    yoyo: true,

    duration: 7,

    ease: "sine.inOut"

});