import { useState, useEffect } from "react";

import { getDate, convertKelvinToFarenheit } from "helpers.js";
import WeatherIcon from "components/WeatherIcon";
// import sunLogo from "assets/images/01d.png";

const CardTemplate = ({ data }) => {
    const [forecastData, setForecastData] = useState(data);

    const date = getDate(forecastData[0].dt);

    // console.log("data = ", data);

    const maxTemps = [];
    const minTemps = [];

    data.forEach((entry) => {
        maxTemps.push(entry.main.temp_max);
        minTemps.push(entry.main.temp_min);
    });
    // console.log(`${date} max temps =`, maxTemps);
    // console.log(`${date} min temps =`, minTemps);

    const highestKelvinTemp = Math.max(...maxTemps);
    const lowestKelvinTemp = Math.min(...minTemps);
    // console.log(`${date} highestKelvinTemp =`, highestKelvinTemp);
    // console.log(`${date} lowestKelvinTemp =`, lowestKelvinTemp);

    // const convertKelvinToFarenheit = (temp) => {
    //     const tempInFarenheit = (parseFloat(temp) - 273.15) * 1.8 + 32;
    //     // console.log(temp, tempInFarenheit);
    //     return tempInFarenheit.toFixed(2);
    // };
    // convertKelvinToFarenheit(highestKelvinTemp);
    // convertKelvinToFarenheit(lowestKelvinTemp);

    return (
        <div className="weather-card">
            {data[0] !== "undefined" && (
                <div>
                    <p>
                        <b>{date}</b>
                        <br></br>
                        {data[0].dt_txt}
                    </p>
                </div>
            )}
            <div className="icon-and-avg-temp">
                <WeatherIcon data={forecastData[0].weather[0]} />
                <span>
                    <b>
                        {convertKelvinToFarenheit(data[0].main.temp)}°F
                        <br></br>
                    </b>
                </span>
            </div>

            <h3 id="weather-description">{data[0].weather[0].description}</h3>
            <p>
                {/* Daily Min. = {data[0].main.temp_min}°F */}
                {/* Daily Min. = {lowestKelvinTemp}°F */}
                Daily Min. = {convertKelvinToFarenheit(lowestKelvinTemp)}°F
                <br></br>
                {/* Daily Max = {data[0].main.temp_max}°F */}
                Daily Max = {convertKelvinToFarenheit(highestKelvinTemp)}°F
            </p>
        </div>
    );
};
export default CardTemplate;

// const CardTemplate = ({ data }) => {
//     const date = getDate(data.dt);

//     return (
//         <div>
//             {data !== "undefined" && (
//                 <div>
//                     <p>{date}</p>
//                     <p>{data.dt_txt} forecast</p>
//                 </div>
//             )}
//             <p>{data.weather[0].description}</p>
//             <p>
//                 Min. = {data.main.temp_min}°F / Max = {data.main.temp_max}°F
//             </p>
//         </div>
//     );
// };
// export default CardTemplate;
