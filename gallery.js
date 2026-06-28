const items=document.querySelectorAll(".item");

const viewer=document.getElementById("viewer");

const viewerImage=document.getElementById("viewerImage");

const nextGallery=document.getElementById("nextGallery");

items.forEach((item)=>{

    item.addEventListener("click",()=>{

        viewer.style.display="flex";

        viewerImage.src=item.querySelector("img").src;

        gsap.fromTo(

            "#viewerImage",

            {

                scale:.8,

                opacity:0

            },

            {

                scale:1,

                opacity:1,

                duration:.45,

                ease:"power3.out"

            }

        );

    });

});

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        gsap.to(

            "#viewerImage",

            {

                scale:.8,

                opacity:0,

                duration:.25,

                onComplete(){

                    viewer.style.display="none";

                }

            }

        );

    }

});

gsap.from(".item",{

    opacity:0,

    y:80,

    stagger:.12,

    duration:1,

    ease:"power3.out"

});

gsap.from(".hero h1",{

    opacity:0,

    y:40,

    duration:1

});

gsap.from(".hero p",{

    opacity:0,

    y:40,

    delay:.2,

    duration:1

});

nextGallery.addEventListener("click",()=>{

    gsap.to("body",{

        opacity:0,

        duration:.8,

        onComplete(){

            window.location.href="letter.html";

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