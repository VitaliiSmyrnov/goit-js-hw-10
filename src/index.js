import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import {fetchCountries} from './fetchCountries.js';
import countriesList from './countrieslist.hbs';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryContainerRef = document.querySelector('.country-list');

inputRef.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch() {
     const inputVal = inputRef.value.trim();
     fetchCountries(inputVal).then(onSuccessSearch).catch(onInputError);
}
function onSuccessSearch(value){
   
   if (value.status === 404) Notify.failure("Oops, there is no country with that name");
   if (value.length > 10) Notify.info("Too many matches found. Please enter a more specific name.");
   if (value.length >= 2 && value.length <= 10){
      const markup = countriesList(value);
      console.log(markup);
      // countryContainerRef.innerHTML = markup;
      // console.log(value);

   }
   
      console.log(value);
     
      
}

function onInputError(error) {
   console.log(error);
}