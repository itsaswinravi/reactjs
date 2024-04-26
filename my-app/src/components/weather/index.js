import { useEffect, useState } from "react"
import Search from "../search"


export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] =useState(false);
    const [weatherData, setWeatherData] = useState(null);

async function fetchWeatherData(param) {
    setLoading(true)
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=501238ac5e75982a38f8fb1af05085b5`)
    
    const data = await response.json();
    if(data) {
        setWeatherData(data);
        setLoading(false);
    }
    console.log(data, "data")
    }
    catch(e) {
        setLoading(false)
        console.log(e)
    }
}

    async function handleSearch () {

    fetchWeatherData(search)
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us' , {
            weekday: 'long',
           
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }
    useEffect (() => {
        fetchWeatherData('bangalore')
    },[])
    console.log(weatherData)
    return ( <div>

        <Search search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}/>
         {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div>{weatherData?.main?.temp} </div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description :""}
          </p>
        <div className="weather-info">
            <div>
                <div> 
                    <p className="wind">{weatherData?.wind?.speed}</p>
                    <p>Wind speed</p>
                </div>

            </div>
            <div>
                <div> 
                    <p className="humidity">{weatherData?.main?.humidity}%</p>
                    <p>humidity</p>
                </div>

            </div>

        </div>
          
        </div>
      )}
    </div>
    
    )
}