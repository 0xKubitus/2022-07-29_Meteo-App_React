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

export const convertKelvinToFarenheit = (temp) => {
    const tempInFarenheit = (parseFloat(temp) - 273.15) * 1.8 + 32;
    // console.log(temp, tempInFarenheit);
    return tempInFarenheit.toFixed(2);
};
