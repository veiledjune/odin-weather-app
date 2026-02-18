import { app } from './app';
import { render } from './render';

export const events = (() => {
  const weatherFormEvents = () => {
    const weatherForm = document.querySelector('.weather-form');
    const searchButton = document.querySelector('.weather-search-btn');
    searchButton.addEventListener('click', async () => search());
    weatherForm.addEventListener('submit', (e) => {
      e.preventDefault();
      search();
    });
  };

  const unitButtonEvents = () => {
    const toggleUnitButton = document.querySelector('.header-toggle-btn');
    const celsiusSpan = document.querySelector('.celsius-span');
    const fahrenheitSpan = document.querySelector('.fahrenheit-span');
    toggleUnitButton.addEventListener('click', async () => {
      app.toggleUnitGroup();
      if (celsiusSpan.classList.contains('--active')) {
        celsiusSpan.classList.remove('--active');
        fahrenheitSpan.classList.add('--active');
      } else {
        fahrenheitSpan.classList.remove('--active');
        celsiusSpan.classList.add('--active');
      }
      search();
    });
  };
  return { weatherFormEvents, unitButtonEvents };
})();

async function search() {
  const weatherForm = document.querySelector('.weather-form');
  const searchInput = document.getElementById('weather-searchbar');
  const location = searchInput.value;
  if (!location) {
    weatherForm.reportValidity();
    return;
  }
  const weatherData = await app.getWeatherObject(location);
  render(weatherData);
}
