fetch("https://ataturk-sozleri-api.herokuapp.com/")
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        document.querySelector("#quote").innerHTML = `" ${data.quote} "`;
    })
    .catch( (err) => {
        console.error("Atatürk Sözleri API yüklenemedi.");
    });


fetch("https://ataturk-resimleri-api.herokuapp.com/")
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        document.querySelector("#image").setAttribute("src", data.image)
    })
    .catch( (err) => {
        console.error("Atatürk Resimleri API yüklenemedi.");
    });