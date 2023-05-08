const contryCards = document.querySelector('.country_cards');

const getCounryHTML = (country) => {
  const countryHTML = `<div class="country_card">
   <div class="country_flag">
     <img src="${country.flags.svg}" alt="${country.flags.alt}">
   </div>
   <div class="country_text">
     <h2>${country.name.official}</h2>
     <p>Population: <span>${country.population}</span></p>
     <p>Region: <span>${country.region}</span></p>
     <p>Capital: <span>${country.capital}</span></p>
   </div>
  </div>`;
  return countryHTML;
};

export const renderCountryCard = (countries) => {
  let resultHTML = countries.map((country) => getCounryHTML(country)).join('');

  contryCards.innerHTML = resultHTML;
};
