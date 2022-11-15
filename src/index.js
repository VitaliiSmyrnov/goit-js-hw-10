import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');

inputRef.addEventListener('input', onInputSearch);

function onInputSearch(e) {
   console.log(inputRef.value);

}