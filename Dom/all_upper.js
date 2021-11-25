const body = document.querySelector("body");

function textToUpperRec(balise) {
    let element;
    for (let i = 0; i < balise.children.length; i++) {
        element = balise.children.item(i);
        if (element.children.length != 0) textToUpperRec(element);
        else element.textContent = element.textContent.toUpperCase();
    }
}
textToUpperRec(body)