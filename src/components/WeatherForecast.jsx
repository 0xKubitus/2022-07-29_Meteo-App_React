import { useState, useEffect } from "react";

import CardTemplate from "components/CardTemplate";
// import { groupDataPerDay } from "helpers.js";

const DisplayWeatherForecast = ({ data }) => {
    const [forecastData, setForecastData] = useState(data.list);

    const dataList = [];
    dataList.push(data.list[0], data.list[8], data.list[16], data.list[24], data.list[32]); // it'd be nice to find a better way to list the right objects but it's fine for now...

    const dataToday = [];
    const dataDayOne = [];
    const dataDayTwo = [];
    const dataDayThree = [];
    const dataDayFour = [];

    const groupDataPerDay = (data) => {
        // console.log("forecastData.length = ", forecastData.length);
        for (let i = 0; i < forecastData.length; i++) {
            if (i < 8) {
                dataToday.push(forecastData[i]);
            } else if (i >= 8 && i < 16) {
                dataDayOne.push(forecastData[i]);
            } else if (i >= 16 && i < 24) {
                dataDayTwo.push(forecastData[i]);
            } else if (i >= 24 && i < 32) {
                dataDayThree.push(forecastData[i]);
            } else if (i >= 32) {
                dataDayFour.push(forecastData[i]);
            }
        }
        // console.log("dataToday = ", dataToday);
        // console.log("dataToday.length = ", dataToday.length);
        // console.log("dataDayOne = ", dataDayOne);
        // console.log("dataDayOne.length = ", dataDayOne.length);
        // console.log("dataDayTwo = ", dataDayTwo);
        // console.log("dataDayTwo.length = ", dataDayTwo.length);
        // console.log("dataDayThree = ", dataDayThree);
        // console.log("dataDayThree.length = ", dataDayThree.length);
        // console.log("dataDayFour = ", dataDayFour);
        // console.log("dataDayFour.length = ", dataDayFour.length);
    };

    groupDataPerDay(forecastData);

    return (
        // <div>
        //     {forecastData.map((entry) => {
        //         return (
        <>
            <div id="today-card-div">
                <CardTemplate data={dataToday} />
            </div>

            <div id="other-days-cards-div">
                {/* <CardTemplate data={entry} /> */}
                <div class="row">
                    <div class="column">
                        <CardTemplate data={dataDayOne} />
                    </div>
                    <div class="column">
                        <CardTemplate data={dataDayTwo} />
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                        <CardTemplate data={dataDayThree} />
                    </div>
                    <div class="column">
                        <CardTemplate data={dataDayFour} />
                    </div>
                </div>
            </div>
        </>
    );
    // }
    // )}
    // </div>
    // );
};

export default DisplayWeatherForecast;
