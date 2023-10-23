
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
    displayCountry : function () {
        // Display the information on the card for the country associated with the global index
        var country = this.countries[this.index];
        // Show the flag, country name, and country abbreviation
        document.querySelector("#name").textContent = `${country.flag}
                                                       ${country.name.common}
                                                       (${country.cca2})`;
        // Show the region
        document.querySelector("#region").textContent = country.region;
        // Show the subregion
        document.querySelector("#subregion").textContent = country.subregion;
        // Show the capital
        document.querySelector("#capital").textContent = country.capital;
        // Build the list of languages
        let markup = "";
        for (var language in country.languages){
            markup += `• ${country.languages[language]}<br>`;
            console.log("language:", language);
        } 
        // Show the languages      
        document.querySelector("#languages").innerHTML = markup;
    },
    hideFields : function () {
        // Based on the selected options (multiple select), hide the associated information
        var country = this.countries[this.index];
        const selectElement = document.querySelector("#hide");
        var blanks = "_";
        // Get an array of the selected options
        const selected = Array.from(selectElement.selectedOptions).map(option => option.value);
        console.log("debug:", selected); // debugging
        // Hide the name, if that is selected
        if (selected.includes("name"))
        {
            document.querySelector("#name").textContent = `${country.flag} 
                                                           ${blanks.repeat(country.name.common.length)}
                                                           (${country.cca2})`;
        }
        // Hide the abbreviation, if that is selected
        if (selected.includes("abbr"))
        {
            document.querySelector("#name").textContent = `${country.flag} 
                                                           ${country.name.common} 
                                                           (${blanks.repeat(country.cca2.length)})`;
        }
        // Hide the region, if that is selected
        if (selected.includes("region"))
        {
            document.querySelector("#region").textContent = blanks.repeat(country.region.length);
        }
        // Hide the subregion, if that is selected
        if (selected.includes("subregion"))
        {
            document.querySelector("#subregion").textContent = blanks.repeat(country.subregion.length);
        }
        // Hide the capital, if that is selected
        if (selected.includes("capital"))
        {
            document.querySelector("#capital").textContent = blanks.repeat(country.capital[0].length);
        }
        // Hide the languages, if that is selected
        if (selected.includes("languages"))
        {
            //document.querySelector("#languages").innerHTML = "";
            let markup = "";
            for (var language in country.languages){
                markup += `• ${blanks.repeat(country.languages[language].length)}<br>`;
                console.log("language:", language); // debugging
            } 
            document.querySelector("#languages").innerHTML = markup;
        }
   }
}

document.querySelector("#hide").addEventListener("change", () => {
    // Callback for the selector of information to hide
    CountryCard.displayCountry();
    CountryCard.hideFields();
});

document.querySelector("#next").addEventListener("click", () => {
    // Callback for the button to show the next random country
    CountryCard.displayRandomCountry();
    CountryCard.hideFields();
});

document.querySelector("#unhide").addEventListener("click", () => {
    // Callback for the button to unhide all hidden fields on the currently displayed country
    // This purposely does NOT clear the selected fields to hide, so you can go to the next country
    // and the fields that were selected will already be hidden.
    CountryCard.displayCountry()});

export default CountryCard
