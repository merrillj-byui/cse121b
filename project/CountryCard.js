
const CountryCard = {
    countriesURL : "https://raw.githubusercontent.com/mledoze/countries/master/countries.json",
    countries : {},
    index : 0,
    init() {
        this.getCountries();
    },
    getCountries : async function () {
        // Download a JSON file with country information
        const response = await fetch(this.countriesURL);
        if (response.ok){
            // Deserialize the JSON file to dictionary
            this.countries = await response.json();
            console.log("countries:", this.countries); // debugging
            // Display the first country, after the Promises have resolved
            this.displayRandomCountry();
        }
    },
    displayRandomCountry : function () {
        // Select a random number between 0 and the number of countries (minus one, for 0 based array)
        const rand = Math.random() * (this.countries.length - 1);
        // Set the global index t this random number (parsed as an integer)
        this.index = parseInt(rand);
        console.log("country:", this.countries[this.index].name.common); // debugging
        // Display this randomly selected country's information on the card
        this.displayCountry();
    },
    displayCountry : function (hide=true) {
        // Display the information on the card for the country associated with the global index
        var country = this.countries[this.index];
        const selectElement = document.querySelector("#hide");
        const blank = "_";
        // Get the array of selected fields to hide
        const selected = Array.from(selectElement.selectedOptions).map(option => option.value);
        console.log("debug:", selected); // debugging
        // Get the values to display (or blanks if they should be hidden)
        const name = hide == true && selected.includes("name") ? blank.repeat(country.name.common.length) : country.name.common;
        const abbr = hide == true && selected.includes("abbr") ? blank.repeat(country.cca2.length) : country.cca2;
        const region = hide == true && selected.includes("region") ? blank.repeat(country.region.length) : country.region;
        const subregion = hide == true && selected.includes("subregion") ? blank.repeat(country.subregion.length) : country.subregion;
        const capital = hide == true && selected.includes("capital") ? blank.repeat(country.capital[0].length) : country.capital;
        // Loop through languages
        let markup = "";
        for (var key in country.languages){
            let language = country.languages[key];
            markup += hide == true && selected.includes("languages") ? `• ${blank.repeat(language.length)}` : `• ${language}`;
            markup += `<br>`;
            console.log("language:", language);
        } 
        // Show the country information      
        document.querySelector("#name").textContent = `${country.flag} ${name} (${abbr})`;
        document.querySelector("#region").textContent = region;
        document.querySelector("#subregion").textContent = subregion;
        document.querySelector("#capital").textContent = capital;
        document.querySelector("#languages").innerHTML = markup;
    },
}

document.querySelector("#hide").addEventListener("change", () => {
    // Callback for the selector of information to hide
    CountryCard.displayCountry();
});

document.querySelector("#next").addEventListener("click", () => {
    // Callback for the button to show the next random country
    CountryCard.displayRandomCountry();
    CountryCard.displayCountry();
});

document.querySelector("#unhide").addEventListener("click", () => {
    // Callback for the button to unhide all hidden fields on the currently displayed country
    // This purposely does NOT clear the selected fields to hide, so you can go to the next country
    // and the fields that were selected will already be hidden.
    CountryCard.displayCountry(false);
});

export default CountryCard
