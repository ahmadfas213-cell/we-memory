const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
const music = document.getElementById("bgMusic");

if (music) {

    music.volume = 0;

    music.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        music.volume = volume;

        if (volume >= 1) {

            clearInterval(fade);

        }

    }, 200);

}
    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            gsap.fromTo(

                entry.target,

                {
                    opacity:0,
                    y:80
                },

                {
                    opacity:1,
                    y:0,
                    duration:1,
                    ease:"power3.out"
                }

            );

        }

    });

},{
    threshold:.3
});

cards.forEach((card)=>{

    observer.observe(card);

});

gsap.from(".hero h1",{

    opacity:0,
    y:50,
    duration:1.2

});

gsap.from(".hero p",{

    opacity:0,
    y:40,
    duration:1.2,
    delay:.3

});

gsap.from(".hero span",{

    opacity:0,
    y:25,
    duration:1,
    delay:.1

});

const button=document.getElementById("nextPage");

button.addEventListener("click",()=>{

    gsap.to("body",{

        opacity:0,

        duration:.8,

        onComplete(){

            window.location.href="memory.html";

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