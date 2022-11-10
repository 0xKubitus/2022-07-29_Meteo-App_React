import { useState, useEffect } from "react";

import WelcomeUser from "components/WelcomeUser";
import Loader from "components/Loader/Loader";
import DisplayWeatherForecast from "components/WeatherForecast";
// import { ... } from "./helpers";

const API_Key = process.env.REACT_APP_OPENWEATHER_API_KEY;
const openWeatherAPIurlStart = "https://api.openweathermap.org/data/2.5/forecast?";

function App() {
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [userPositionIsShared, setUserPositionIsShared] = useState(undefined);
    const [data, setData] = useState([]);
    const [userCity, setUserCity] = useState();

    useEffect(() => {
        const userGeolocalization = async () => {
            const getUserCurrentPosition = () => {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            };

            const successCallback = (position) => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
                // console.log("user current latitude = ", lat);
                // console.log("user current longitude = ", lon);
                setUserPositionIsShared(true);
            };

            getUserCurrentPosition();

            const requestURL = `${openWeatherAPIurlStart}lat=${lat}&lon=${lon}&appid=${API_Key}`;
            // console.log("requestURL = ", requestURL);

            await fetch(requestURL)
                .then((response) => response.json())
                .then((result) => {
                    setData(result);
                    console.log("API request results = ", result);
                    setUserCity(result.city.name);
                });
        };

        userGeolocalization();
    }, [lat, lon]);

    useEffect(() => {
        console.log(`user position set to: ${userCity}`);
    }, [userCity]);

    const errorCallback = (error) => {
        const geolocRequestError = document.getElementById("geolocRequestError");
        if (error.code === 1) {
            geolocRequestError.classList.remove("hidden");
            geolocRequestError.innerHTML = "You've decided not to share your position. It's OK, I won't ask you again. Also, don't worry, you can still consult our list of selected cities forecasts!";
            setUserPositionIsShared(false);
        } else if (error.code === 2) {
            geolocRequestError.classList.remove("hidden");
            geolocRequestError.innerHTML = "The network is down or the positioning service can't be reached.";
        } else if (error.code === 3) {
            geolocRequestError.classList.remove("hidden");
            geolocRequestError.innerHTML = "The attempt timed out before it could get the location data.";
        } else {
            geolocRequestError.classList.remove("hidden");
            geolocRequestError.innerHTML = "Geolocation failed due to unknown error.";
        }
    };

    return (
        <div className="App">
            <WelcomeUser />
            {userPositionIsShared === undefined && <Loader />} {/* conditionnal rendering for 'Loader' component */}
            {typeof data.city != "undefined" ? (
                <div>
                    <h2>
                        <u>{data.city.name}</u> 5-Days Weather Forecast:
                    </h2>
                    <DisplayWeatherForecast data={data} />
                </div>
            ) : (
                <div></div>
            )}{" "}
            {/* when data is 'undefined' it will show an empty div, else it will return my 'DisplayWeatherForecast' component */}
            <h2 id="geolocRequestError" className="hidden">
                {/* another kind (among many others) of conditionnal rendering */}
                no error
            </h2>
        </div>
    );
}

export default App;
