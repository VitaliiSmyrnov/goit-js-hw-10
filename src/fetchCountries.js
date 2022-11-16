const BASE_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
   return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`).then(res => {
      if (res.ok) {
        return res.json();
      } else {
         throw new Error(res.status);
      }
    });
}