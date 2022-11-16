import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import {fetchCountries} from './fetchCountries.js';
import countryList from './templates/countryList.hbs';
import countryInfo from './templates/countryInfo.hbs';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryListContainerRef = document.querySelector('.country-list');
const countryInfoContainerRef = document.querySelector('.country-info');


function onInputSearch(e) {
   const inputVal = e.target.value.trim();
   if (!inputVal) {
      countryListContainerRef.innerHTML = '';
      countryInfoContainerRef.innerHTML = '';
   }
   fetchCountries(inputVal).then(onSuccessSearch).catch(onInputError);
}

function onSuccessSearch(value){
   
   if (value.status === 404) Notify.failure("Oops, there is no country with that name");
   if (value.length > 10) Notify.info("Too many matches found. Please enter a more specific name.");
   if (value.length >= 2 && value.length <= 10){
      countryInfoContainerRef.innerHTML = '';
      const markup = countryList(value);
      countryListContainerRef.innerHTML = markup;
   }
   if (value.length === 1) {
      console.log(value);
      console.log(Object.values(value[0].languages));
      const langList = Object.values(value[0].languages).join(',');
      console.log(langList);
      countryListContainerRef.innerHTML = '';
      const markup = countryInfo(value);
      countryInfoContainerRef.innerHTML = markup;
   }
   }
   
   function onInputError(error) {
      console.log(error);
   }

   inputRef.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));