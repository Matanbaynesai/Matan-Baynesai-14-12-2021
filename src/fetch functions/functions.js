
  const Key = "emTgEkgURxkPZQTI6x72glRHnnQL5jEx";

 export function getCityKey(citySearch) {
    return fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${Key}&q=${citySearch}`
    ).then((res) => {
      return res.json();
    });
  }

  export async function getDailyForCast(cityKey) {
    return fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${Key}&details=true`
    )
      .then((res) => {
        return res.json();
      });
  }
  export async function getWeaklyForCast(cityKey) {
    return fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${Key}&details=true`
    )
      .then((res) => {
        return res.json();
      })
  }
 