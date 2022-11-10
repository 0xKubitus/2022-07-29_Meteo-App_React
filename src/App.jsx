import { useState, useEffect } from "react";

import WelcomeUser from "components/WelcomeUser";
import Loader from "components/Loader/Loader";
// import { ... } from "./helpers";

const openWeatherAPIurlStart = "https://api.openweathermap.org/data/2.5/forecast?";

function App() {
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [userPositionIsShared, setUserPositionIsShared] = useState(undefined);

    const successCallback = (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        console.log("user current latitude = ", lat);
        console.log("user current longitude = ", lon);
        setUserPositionIsShared(true);
    };

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

    const getCurrentWeatherData = () => {
        // try {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        // } catch (err) {
        //     console.error(err);
        // }
    };

    getCurrentWeatherData();

    return (
        <div className="App">
            <WelcomeUser />
            {userPositionIsShared === undefined && <Loader />}

            <h2 id="geolocRequestError" className="hidden">
                no error
            </h2>
        </div>
    );
}

export default App;
