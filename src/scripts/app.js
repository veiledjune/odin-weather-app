export const app = (() => {
  let unitGroup = 'metric';
  const getWeatherData = async (location) => {
    const apiKey = 'QE58399HK3Y6CN2DJ2QAQKKNG';
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=${apiKey}
  `,
      );
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getWeatherObject = async (location) => {
    const weatherData = await getWeatherData(location);
    return weatherData;
  };

  const toggleUnitGroup = () => {
    unitGroup === 'metric' ? (unitGroup = 'us') : (unitGroup = 'metric');
  };

  return { getWeatherObject, toggleUnitGroup };
})();
