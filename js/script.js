import { modeSwitcher } from './modules/modeSwitcher.js';
import { select } from './modules/select.js';
import { renderCountryCard } from './modules/renderCards.js';
import { getData } from './modules/getData.js';

const form = document.querySelector('form');
const inputCountry = document.querySelector('#name');
const regions = document.querySelector('.regions');

async function renderCards(filter) {
  const countries = await getData(filter);
  renderCountryCard(countries);
}

modeSwitcher();
select();

renderCards('all');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const request = `${inputCountry.id}/${inputCountry.value}`;
  renderCards(request);
});
regions.addEventListener('click', (event) => {
  const request = `${regions.id}/${event.target.id}`;
  renderCards(request);
});
