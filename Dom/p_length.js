let paragraphes = document.querySelectorAll("p");
var text = ""
paragraphes.forEach(paragraphe => {
    text = "Ce paragraphe contient " + paragraphe.innerHTML.length + " charactères."
    paragraphe.insertAdjacentHTML('afterbegin', text)
});