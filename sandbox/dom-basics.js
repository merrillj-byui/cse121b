const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://brightspotcdn.byui.edu/dims4/default/3b59bf0/2147483647/strip/true/crop/560x314+22+0/resize/852x478!/format/webp/quality/90/?url=http%3A%2F%2Fbyu-idaho-brightspot.s3.amazonaws.com%2F6c%2Fa1%2Fb3306ea14ed5aef8b82a86ee39d0%2Fbyui-offical-logo-blue-01.png");
newImage.setAttribute("alt", "some alternate text");
document.body.appendChild(newImage)
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);