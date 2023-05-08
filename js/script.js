import { modeSwitcher } from './modules/modeSwitcher.js';
import { select } from './modules/select.js';
import { renderCountryCard } from './modules/renderCards.js';
import { getData } from './modules/getData.js';

const form = document.querySelector('form');
const inputCountry = document.querySelector('#name');
const regions = document.querySelector('.regions');

let countries = [];

modeSwitcher();
select();
getCountries();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let filteredCountries = countries.filter(
    (country) => inputCountry.value == country.name.common
  );
  renderCountryCard(filteredCountries);
});

regions.addEventListener('click', (event) => {
  let filteredCountries = countries.filter(
    (country) => event.target.innerText == country.region
  );
  renderCountryCard(filteredCountries);
});

async function getCountries() {
  countries = await getData();
  renderCountryCard(countries);
}
