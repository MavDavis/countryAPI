let select = document.getElementById("countries");
let flag = document.getElementById("flag-img");
let capital = document.getElementById("capital");
let dialingCode = document.getElementById("dialingCode");
let population = document.getElementById("population");
let currencies = document.getElementById("currencies");
let region = document.getElementById("region");
let subRegion = document.getElementById("subRegion");

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => initialise(data))

.catch((err) => console.log(err));

function initialise(data) {
    countries = data;
    changeCountry();

    countries.forEach((country) => {
        let option = "";
        option += ` <option class="option" value="${country.ccn3}">${country.name.common}</option>`;
        select.innerHTML += option;
    });
}

function changeCountry(value) {
    const newCountryData = countries.find((country) => country.ccn3 === value);
    console.log(newCountryData);
    flag.src = newCountryData.flags.png;
    capital.innerText = newCountryData.capital;
    population.innerText = newCountryData.population.toLocaleString();
    region.innerText = newCountryData.region;
    let currency = newCountryData.currencies;
    currencies.innerText = currency[Object.keys(currency)[0]].name;
    subRegion.innerText = newCountryData.subregion;
}

select.addEventListener("change", (event) => {
    changeCountry(event.target.value);
});