console.log("script.js loaded successfully");

const langSelector = document.querySelector("input.lang-selector");
langSelector.addEventListener("change", () => {
    // do something
});

// replacing social-icons and button-links when scrolled
const navbar = document.querySelector("nav");
const profile = document.querySelector(".profile");
const aboutSection = document.querySelector(".about-section");
const socialIcons = document.querySelector(".social-icons");
const buttonLinks = document.querySelector(".button-links");

const target = document.querySelector("header");
const callback = (entries) => {
    if (entries[0].isIntersecting){
        navbar.style.display = "none";
        if (profile.children[1] !== socialIcons){
            navbar.removeChild(socialIcons);
            profile.appendChild(socialIcons);
            navbar.removeChild(buttonLinks);
            aboutSection.appendChild(buttonLinks);
            buttonLinks.children[0].innerHTML = "Visit my Blog";
        }
    } else{
        navbar.style.display = "flex";
        if (profile.children[1] === socialIcons){
            profile.removeChild(socialIcons);
            navbar.appendChild(socialIcons);
            aboutSection.removeChild(buttonLinks);
            navbar.appendChild(buttonLinks);
            buttonLinks.children[0].innerHTML = "Blog";
        }
    }
};

const observer = new IntersectionObserver(callback);
observer.observe(target);

// replacing small and big logos
const logo = document.querySelector(".logo");
const mediaQ = window.matchMedia("(max-width: 680px)");

function matchMediaQ(mediaQ){
    if (mediaQ.matches) {
        logo.src = "./img/logo-mobile.png";
        logo.style.height = "50px";
      } else {
        logo.src = "./img/logo.png";
        logo.style.height = "70px";
      }
}

matchMediaQ(mediaQ);
mediaQ.addListener(matchMediaQ);