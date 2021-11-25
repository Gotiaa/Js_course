const body = document.querySelector("body")
const titles = document.querySelectorAll("h1, h2, h3")

function insertNewElement(element) {
    let li = document.createElement("li");
    li.append(element);
}

function createNewNode() {
    document.createElement("ol")
}

function indexBuilder(element, index) {
    switch (element.tagName) {
        case ('H1'):
            let ol = document.createElement("ol");
            let li = ol.createElement("li");
            li.append()
    }
}

//indexBuilder("body");
// let index = 0;
// let ol = document.createElement("ol")
// let il = ol.createElement("li")
// li.append(title[index], indexBuilder(title[index++], index));
// console.log(titles.length);
console.log(titles[0].nextElementSibling)



// let paragraph = document.createElement("p");
// let strong = document.createElement("strong");
// strong.append("informatique");
// paragraph.append("INTECH est une école d'", strong, " !");
// paragraph.innerHTML; // => "INTECH est une école d'<strong>informatique</strong> !"