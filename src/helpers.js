// import { useState, useEffect } from "react";

export const getDate = (date) => {
    const d = new Date(date * 1000);
    const day = d.getDay();
    const getDay = () => {
        if (day === 1) {
            return "Monday";
        } else if (day === 2) {
            return "Tuesday";
        } else if (day === 3) {
            return "Wednesday";
        } else if (day === 4) {
            return "Thursday";
        } else if (day === 5) {
            return "Friday";
        } else if (day === 6) {
            return "Saturday";
        } else {
            return "Sunday";
        }
    };
    return new Date().getDay() === day ? "Today" : getDay();
};

// export const sortData = (data) => {
//     const dataToday = {};
//     const dataDayOne = {};
//     const dataDayTwo = {};
//     const dataDayThree = {};
//     const dataDayFour = {};

//     console.log(forecastData);
//     // console.log("data.list.length = ", data.list.length);
//     //     for (let i = 0; i < data.list.length; i++) {
//     //         if (i < 9) {
//     //             dataToday.push(data.list[i]);
//     //         }
//     //     }
//     //     console.log(dataToday);
// };
