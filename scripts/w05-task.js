/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = {};

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(function(temple){
        article = document.createElement('article');
        h3 = document.createElement('h3');
        h3.innerHTML = temple.templeName;
        image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(image);
        templesElement.appendChild(article);
    });
} 



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }
}


/* reset Function */
const reset = () => {
    templesElement.querySelectorAll('article').forEach(function(element){
        element.remove();
    });
}


/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    var temples = [];
    switch (filter) {
        case "utah":
            displayTemples(templeList.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(templeList.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "atoz":
            let temples = templeList.map((temple) => temple);
            displayTemples(temples.sort((a, b) => (a.templeName > b.templeName) ? 1 : -1));
            break;
        case "all":
            displayTemples(templeList);
            break;
    }
}

getTemples();
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});