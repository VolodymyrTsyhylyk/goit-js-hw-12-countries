import fetchCountries from './fetchCountries';
import createTemplate from './markup';
import onFetchError from '../index';

function onSearch(ev) {
  const searchQuery = ev.target.value;

  fetchCountries(searchQuery).then(createTemplate).catch(onFetchError);
}

export default onSearch;
