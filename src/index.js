import './sass/main.scss';
import onSearch from './js/search';
//

// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';

//

const _ = require('lodash');

const findCountryRef = document.querySelector('#find-country');

findCountryRef.addEventListener('input', _.debounce(onSearch, 500));

function onFetchError(error) {
  console.log(error);
}

export default onFetchError;

//

// function rendCountInfo(country) {
//     refs.countryInfo.innerHTML = '';
//     if(country.length === 1) {
//     } else if (country.length > 1 && country.length < 8) {
//         const murkupCountries = CountryItemstTpl (country);
//         refs.countryInfo.innerHTML = murkupCountries;
//     } else {
//         onFetchError();
//     }
