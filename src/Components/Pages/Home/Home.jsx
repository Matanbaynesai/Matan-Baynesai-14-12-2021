import React, { useState, useEffect } from "react";
import "./home.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import CardMedia from '@mui/material/CardMedia';
import { AddWeather, DeleteWeather } from "../../../Actiones";
import { useDispatch, useSelector } from "react-redux";
import {
  getCityKey,
  getDailyForCast,
  getWeaklyForCast,
} from "../../../fetch functions/functions";

const Home = () => {
  const [citySearch, setCitySearch] = useState("Tel aviv");
  const [searchResults, setSearchResults] = useState([]);
  const [dailyForcast, setDailyForcast] = useState([]);
  const [weaklyForcast, setWeaklyForcast] = useState([]);
  const data = useSelector((state) => state);

  useEffect(() => {
    search()
  }, [])

  const isItOnFavorite = data.map(item => {
    return item.key.toString()
  })

  const dispatch = useDispatch();
  function onCityChange(e) {
    setCitySearch(e.target.value);
  }

  let weather = [
    "https://image.shutterstock.com/image-vector/cold-weather-icon-260nw-157883522.jpg",

    "https://cdn4.vectorstock.com/i/1000x1000/68/93/sunny-day-weather-forecast-info-icon-yellow-sun-vector-24566893.jpg",

    "https://townsquare.media/site/705/files/2021/06/attachment-RS45164_GettyImages-1150050227-scr1.jpg?w=980&q=75",

    "https://previews.123rf.com/images/carbo82/carbo821206/carbo82120600086/14194625-icon-rainy-weather.jpg",

    "https://www.bakersfieldspeedway.com/wp-content/uploads/2018/03/502HeavyRain.png",
  ];

  let filtered = searchResults.filter((item) => {
    return item.LocalizedName.toLowerCase() === citySearch.toLowerCase();
  });
  
  async function search() {
    try {
       const result = await getCityKey(citySearch);
       const filteredResult = result.filter((item)=>
        {return item.LocalizedName.toUpperCase() === citySearch.toUpperCase()})
      setSearchResults(filteredResult);
      for (const item of filtered) {
        const dayForcast = await getDailyForCast(item.Key);
        const weekForcast = await getWeaklyForCast(item.Key);
        setDailyForcast(dayForcast);
        setWeaklyForcast(weekForcast);
      }
    } catch (error) {
      console.error(error);
    }
  }
 
  //  window.onload = search();
  console.log(dailyForcast);


  return (
    <header className="home-container">
      <div className="search-area">
        <label htmlFor="search">Search City</label>
        <input onChange={onCityChange} type="text" />
        <button onClick={ search} className="search-btn">
          Search
        </button>
      </div>
      <ul className="cards-container">
        {dailyForcast.DailyForecasts?.map((item, index) => {
          return (
            <li key={index} className="daily-cards">
              <Card>
                <img src={weather[index]} width="250px" height="200px" alt="" />
                <CardActionArea>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                    >
                      <h1>{citySearch}</h1>
                      <p>current temperature </p>
                      <br />
                      {item.Temperature.Maximum.Unit}
                      <p>{item.Temperature.Maximum.UnitType}</p>
                    </Typography>
                  </CardContent>
                  {
                    isItOnFavorite[index] === searchResults[0]?.Key ? <Button size="small"
                    color="primary" onClick={()=> alert("Hey Its Allready On Your Favorite")}>save as favorite</Button>:  <Button
                    onClick={() => {
                      dispatch(
                        AddWeather({
                          city: filtered[0].LocalizedName,
                          temp: item.Temperature.Maximum.UnitType,
                          key: filtered[0].Key,
                          img: weather[index],
                        })
                      );
                    }}
                    size="small"
                    color="primary"
                  >
                    save as favorite
                  </Button>
                  }
                </CardActionArea>
              </Card>
            </li>
          );
        })}
        {weaklyForcast.DailyForecasts?.map((item, index) => {
          return (
            <li key={index} className="weekly-cards">
              <Card>
                <img src={weather[index]} width="250px" height="200px" alt="" />
                <CardActionArea>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                    >
                      <h1>{citySearch}</h1>
                      <br />
                      <p style={{ fontSize: "10px" }}>
                        {item.Temperature.Maximum.Unit}
                      </p>
                      <p>{item.Temperature.Maximum.UnitType}</p>
                      <br />
                      {item.Date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
export default Home;
