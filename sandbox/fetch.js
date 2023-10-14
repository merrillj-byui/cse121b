// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  output = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2>
    <img src=${results.sprites.front_default} alt="Image of ${results.name}">`;
  output.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data){
  console.log("data: ", data);
  outputList = document.querySelector("#outputList");
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  outputList.innerHTML = "<h2>Pokemon List<h2>";
  pokeList.forEach(function(pokemon) {
    outputList.innerHTML += `<li>${pokemon.name}</li>`;
  });
}

async function getPokemonList(url){
  const response = await fetch(url);
  if (response.ok)  {
    const data = await response.json();
    doStuffList(data);
  }
}

function compare(a,b) {
    if (a.name > b.name) {
        return 1;
    }
    else if (a.name < b.name) {
        return -1;
    }
    else {
        return 0;
    }
}

function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}


getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);