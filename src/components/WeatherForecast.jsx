const DisplayWeatherForecast = ({ data }) => {
    console.log("data = ", data);
    // console.log("city = ", data.city.name);

    // const currentCity = data.city.name;

    const ForecastTitle = () => {
        return (
            <div>
                <h2>User's Current Position 5-Days Forecast:</h2>
                <h3>{data.city.name}</h3>
            </div>
        );
    };

    return <div>{typeof data.city != "undefined" ? <ForecastTitle /> : <div></div>}</div>;
};

export default DisplayWeatherForecast;
