

export function fetchCountries(name) {
   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,languages,flags.svg`).then(r => r.json());
}
// ?fields=name.official,capital,population,flags.svg,languages
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов