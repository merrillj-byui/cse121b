/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Joe Merrill";
let currentYear = "2023";
let profilePicture = "images/IMG_2892.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementsByTagName('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement[0].setAttribute("src", profilePicture);
imageElement[0].setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
favoriteFoods = ["BBQ", "Mexican", "Chinese", "Italian", "Indian"];
foodElement.innerHTML += favoriteFoods;

let food = "Dessert";
favoriteFoods.push(food);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

