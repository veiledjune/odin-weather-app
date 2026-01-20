export const app = (() => {
  let unitGroup = 'metric';
  const getWeatherData = async (location, unit) => {
    const apiKey = 'QE58399HK3Y6CN2DJ2QAQKKNG';
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}}?unitGroup=${unit}&key=${apiKey}
  `,
      );
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getWeatherObject = async (location, unit) => {
    const weatherData = await getWeatherData(location, unit);
    return weatherData;
  };

  return { getWeatherObject };
})();
