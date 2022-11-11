import { useState, useEffect } from "react";

import clearLogo from "assets/images/01d.png";
import fewCloudsLogo from "assets/images/02d.png";
import scatteredCloudsLogo from "assets/images/03d.png";
import brokenCloudsLogo from "assets/images/04d.png";
import showerRainLogo from "assets/images/09d.png";
import rainLogo from "assets/images/10d.png";
import thunderLogo from "assets/images/11d.png";
import snowLogo from "assets/images/13d.png";
import mistLogo from "assets/images/50d.png";

const WeatherIcon = ({ data }) => {
    // const [weatherData, setWeather]
    // if (data.weather.main !== "undefined" && data.weather.main !== "Clouds") {

    // console.log("icon data = ", data);
    console.log("icon data.main = ", data.main);

    if (data.main !== "undefined") {
        if (data.main === "Clear") {
            return <img src={clearLogo} alt="clear sky" />;
        } else if (data.main === "Snow") {
            return <img src={snowLogo} alt="snow" />;
        } else if (data.main === "Thunderstorm") {
            return <img src={thunderLogo} alt="thunderstorm" />;
        }
    }
};

export default WeatherIcon;
