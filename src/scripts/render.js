export function render(weatherData) {
  const weatherCardContainer = document.querySelector(
    '.weather-card-container',
  );
  weatherCardContainer.textContent = '';
  for (let i = 0; i <= 6; i++) {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const weatherCard = createElement('div', 'weather-card');
    const weatherDayContainer = createElement('div', 'weather-day-container');
    const weatherDataDate = weatherData.days[i].datetime;
    const dateObject = new Date(weatherDataDate);
    const dayOfWeek = daysOfWeek[dateObject.getDay()];
    const weatherDay = createElement('h3', 'weather-day', dayOfWeek);
    const weatherDate = createElement('span', 'weather-date', weatherDataDate);
    weatherDayContainer.append(weatherDay, weatherDate);

    const weatherConditionContainer = createElement(
      'div',
      'weather-condition-container',
    );

    const weatherConditionSrc = require(
      `../icons/${weatherData.days[i].icon}.svg`,
    );

    const weatherConditionIcon = createImage(weatherConditionSrc);
    const weatherCondition = createElement(
      'span',
      'weather-condition',
      `${weatherData.days[i].conditions}`,
    );
    weatherConditionContainer.append(weatherConditionIcon, weatherCondition);

    const currentTemp = weatherData.days[i].temp;
    const maxTemp = weatherData.days[i].tempmax;
    const minTemp = weatherData.days[i].tempmin;

    const weatherCurrentTemp = createElement(
      'span',
      'weather-current-temp',
      `Current Temperature: ${currentTemp}\u00B0`,
    );
    const weatherMaxTemp = createElement(
      'span',
      'weather-current-temp',
      `Max Temperature: ${maxTemp}\u00B0`,
    );
    const weatherMinTemp = createElement(
      'span',
      'weather-current-temp',
      `Min Temperature: ${minTemp}\u00B0`,
    );

    const windSpeed = weatherData.days[i].windspeed;
    const weatherWind = createElement(
      'span',
      'weather-wind',
      `Wind: ${windSpeed}`,
    );

    weatherCard.append(
      weatherDayContainer,
      weatherConditionContainer,
      weatherCurrentTemp,
      weatherMaxTemp,
      weatherMinTemp,
      weatherWind,
    );
    weatherCardContainer.appendChild(weatherCard);
  }
}

function createElement(type, className, textContent) {
  const element = document.createElement(type);
  if (!className) return element;
  element.classList.add(className);
  if (!textContent) return element;
  element.textContent = textContent;
  return element;
}

function createImage(src) {
  const img = document.createElement('img');
  img.src = src;
  return img;
}
