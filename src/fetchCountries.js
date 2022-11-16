const BASE_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
   return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`).then(r => r.json());
}
// ?fields=name.official,capital,population,flags.svg,languages
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов