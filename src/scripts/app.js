export async function getWeatherData(location, unit) {
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
}
