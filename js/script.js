console.log("%cscript.js loaded successfully", "color: green;");


// changing the language
const texts = {
    tr: {
        about: "Merhaba ben Orhan Emre. Yazılımı seviyorum ve büyük bir yazılımcı olmak istiyorum. Sanırım kendime self-taught developer diyebilirim. UI / UX tasarımları yaparım, kod yazarım ve içerik oluştururum. Benimle sosyal medya hesaplarımdan iletişime geçebilirsiniz.",
        button1: "Blog'umu ziyaret edin",
        header1: "Yeteneklerim",
        header2: "Projelerim",
        lang1: "İngilizce",
        description1: "HTML, CSS ve JavaScipt'de yazıldı. Rastgele tavsiyeler için Advice Slip JSON API kullanır.",
        lang2: "Türkçe",
        description2: "Projelerle Python'ın amacı python öğrenen Türk geliştiricilere ücretsiz bir proje arşivi oluşturmaktır.",
        gh1: "GitHub'da görün",
        gh2: "GitHub'da görün",
    },
    en: {
        about: "Hi I am Orhan Emre. I love programming and I want to be a big programmer. I think I can call myself a self-taught developer. I design UI / UXs, write codes and create contents. You can contact me with my social accounts.",
        button1: "Visit my Blog",
        header1: "My Skills",
        header2: "My Projects",
        lang1: "English",
        description1: "Written in HTML, CSS and JavaScript. Uses Advice Slip JSON API for random advices.",
        lang2: "Turkish",
        description2: 'The purpose of "Projelerle Python" is to create a free project archive for Turkish developers learning python.',
        gh1: "View on GitHub",
        gh2: "View on GitHub",
    }
}
const langSelector = document.querySelector("input.lang-selector");
if(localStorage.getItem("language") === null){
    if(navigator.language === "tr-TR"){
        localStorage.setItem("language", "TR");
        langSelector.checked = false;
    } else {
        localStorage.setItem("language", "EN");
        langSelector.checked = true;
    }
} else {
    const language = localStorage.getItem("language");
    if (language === "TR"){
        langSelector.checked = false;
        for (const [key, value] of Object.entries(texts.tr)) {
            const keyEl = document.querySelector("." + key);
            keyEl.innerText = value;
        }
    }
    if (language === "EN"){
        langSelector.checked = true;
        for (const [key, value] of Object.entries(texts.en)) {
            const keyEl = document.querySelector("." + key);
            keyEl.innerText = value;
        }
    }
}
langSelector.addEventListener("change", () => {
    if (!langSelector.checked){
        for (const [key, value] of Object.entries(texts.tr)) {
            const keyEl = document.querySelector("." + key);
            keyEl.innerText = value;
        }
        localStorage.setItem("language", "TR");
    }
    if (langSelector.checked){
        for (const [key, value] of Object.entries(texts.en)) {
            const keyEl = document.querySelector("." + key);
            keyEl.innerText = value;
        }
        localStorage.setItem("language", "EN");
    }
});