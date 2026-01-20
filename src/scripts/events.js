import { app } from './app';
import { render } from './render';
export const events = (() => {
  const weatherFormEvents = () => {
    const searchInput = document.getElementById('weather-searchbar');
    const searchButton = document.querySelector('.weather-search-btn');
    searchButton.addEventListener('click', async () => {
      const location = searchInput.value;
      if (location) {
        const weatherData = await app.getWeatherObject(location);
        render(weatherData);
      }
    });
  };
  return { weatherFormEvents };
})();
