const typing = document.getElementById("typing");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const text = `Kalau setelah lihat semua ini...

kamu masih punya sedikit ruang buat aku,

aku pengen mulai lagi.

Pelan-pelan aja.

Aku bakal berusaha lebih baik.

🤍`;

let i = 0;

function write() {

    if (i < text.length) {

        const char = text.charAt(i);

        if (char === "\n") {

            typing.innerHTML += "<br>";

        } else {

            typing.innerHTML += char;

        }

        i++;

        setTimeout(write, 40);

    }

}

write();

yes.addEventListener("click", () => {

    document.body.innerHTML = `

    <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:#fff7fa;
        font-family:Inter,sans-serif;
        text-align:center;
        padding:30px;
    ">

        <h1 style="
            font-family:'Cormorant Garamond',serif;
            font-size:70px;
            color:#444;
            margin-bottom:20px;
        ">

            Makasih Sayang 🤍

        </h1>

        <p style="
            font-size:20px;
            color:#666;
            line-height:1.8;
        ">

            Aku janji bakal jadi ndut yang lebih baik lagi.<br><br>

            Semoga habis ini kita bisa ngobrol lagi,<br>
            ketawa lagi,<br>
            dan bikin cerita baru lagi.

        </p>

    </div>

    `;

});

function moveButton() {

    const x = Math.random() * (window.innerWidth - 180);
    const y = Math.random() * (window.innerHeight - 80);

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";

}

no.addEventListener("mouseenter", moveButton);