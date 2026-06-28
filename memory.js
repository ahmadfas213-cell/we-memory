const photos=document.querySelectorAll(".photo");

const popup=document.getElementById("popup");

const popupImage=document.getElementById("popupImage");

const popupText=document.getElementById("popupText");

const closePopup=document.getElementById("closePopup");

const nextMemory=document.getElementById("nextMemory");

photos.forEach((photo)=>{

    photo.addEventListener("click",()=>{

        popup.style.display="flex";

        popupImage.src=photo.querySelector("img").src;

        popupText.innerHTML=photo.dataset.text;

        gsap.fromTo(

            ".popupCard",

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
closePopup.addEventListener("click",()=>{

    gsap.to(

        ".popupCard",

        {

            scale:.8,

            opacity:0,

            duration:.3,

            onComplete(){

                popup.style.display="none";

            }

        }

    );

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});
gsap.from(".photo",{

    opacity:0,

    y:80,

    duration:1,

    stagger:.15,

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

nextMemory.addEventListener("click",()=>{

    gsap.to("body",{

        opacity:0,

        duration:.8,

        onComplete(){

            window.location.href="gallery.html";

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