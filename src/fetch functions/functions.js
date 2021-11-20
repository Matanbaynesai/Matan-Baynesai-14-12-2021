
  const Key = "jgNATDaA8kPUuRevGvSGl8CjKFgDedS1";

 export function getCityKey(citySearch) {
    return fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${Key}&q=${citySearch}`
    ).then((res) => {
      return res.json();
    });
  }

  export async function getDailyForCast(cityKey) {
    return fetch(
      `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${Key}&details=true`
    )
      .then((res) => {
        return res.json();
      });
  }
  export async function getWeaklyForCast(cityKey) {
    return fetch(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${Key}&details=true`
    )
      .then((res) => {
        return res.json();
      })
  }
 