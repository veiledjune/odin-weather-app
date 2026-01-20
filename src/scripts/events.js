import { app } from './app';
import { render } from './render';

export const events = (() => {
  const weatherFormEvents = () => {
    const searchButton = document.querySelector('.weather-search-btn');
    searchButton.addEventListener('click', async () => {
      search();
    });
  };

  const unitButtonEvents = () => {
    const toggleUnitButton = document.querySelector('.header-toggle-btn');
    const unitDisplaySpan = document.querySelector('.unit-span');
    const celsiusSpan = document.querySelector('.celsius-span');
    const fahrenheitSpan = document.querySelector('.fahrenheit-span');
    toggleUnitButton.addEventListener('click', async () => {
      app.toggleUnitGroup();
      if (celsiusSpan.classList.contains('--active')) {
        celsiusSpan.classList.remove('--active');
        fahrenheitSpan.classList.add('--active');
        unitDisplaySpan.textContent = 'F\u00B0';
      } else {
        fahrenheitSpan.classList.remove('--active');
        celsiusSpan.classList.add('--active');
        unitDisplaySpan.textContent = 'C\u00B0';
      }
      search();
    });
  };
  return { weatherFormEvents, unitButtonEvents };
})();

async function search() {
  const searchInput = document.getElementById('weather-searchbar');
  const location = searchInput.value;
  if (location) {
    const weatherData = await app.getWeatherObject(location);
    render(weatherData);
  }
}
