const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

const blur1 = document.querySelector(".blur1");
const blur2 = document.querySelector(".blur2");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background = "rgba(10,10,10,.85)";
        navbar.style.border = "1px solid rgba(255,255,255,.08)";
        navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "rgba(255,255,255,.04)";
        navbar.style.boxShadow = "none";

    }

});


document.addEventListener("mousemove", (e) => {

    let x = e.clientX;
    let y = e.clientY;

    blur1.style.transform =
        `translate(${x * 0.03}px, ${y * 0.03}px)`;

    blur2.style.transform =
        `translate(${-x * 0.03}px, ${-y * 0.03}px)`;

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".section").forEach((section)=>{

    observer.observe(section);

});

menuBtn.addEventListener("click",()=>{

    menu.classList.toggle("active");

});


document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});

const heroTitle = document.querySelector(".hero h2");

const words = [

"Network Engineer",
"IT Support",
"Web Developer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect(){

    const current = words[wordIndex];

    if(!deleting){

        heroTitle.innerHTML = current.substring(0,charIndex);

        charIndex++;

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typingEffect,1200);

            return;

        }

    }else{

        heroTitle.innerHTML = current.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect,deleting ? 40 : 90);

}

typingEffect();