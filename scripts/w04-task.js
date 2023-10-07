/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Joe Merrill",
    photo: "images/IMG_2892.jpeg",
    favoriteFoods : ["Mexican", "Chinese", "Italian","Indian","American"],
    hobbies : ["reading","music","family","movies"],
    placesLived : []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place: "Newbury Park, CA", length: "19 years"});
myProfile.placesLived.push({place: "Colombia", length: "2 years"});
myProfile.placesLived.push({place: "Provo, Utah", length: "6 years"});
myProfile.placesLived.push({place: "Gilroy, CA", length: "11 years"});
myProfile.placesLived.push({place: "Elk Ridge, UT", length: "16 years"});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(function(food){
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(function(hobby){
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(function(placeObj){
    let dt = document.createElement('dt');
    dt.textContent = placeObj.place;
    let dd = document.createElement('dd');
    dd.textContent = placeObj.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

