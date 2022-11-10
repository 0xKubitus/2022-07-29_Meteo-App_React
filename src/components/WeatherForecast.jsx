const DisplayWeatherForecast = ({ data }) => {
    const ForecastTitle = () => {
        const listArray = data.list;
        const forecastList = [listArray[0], listArray[8], listArray[16], listArray[24], listArray[32]];
        console.log("5days forecast data = ", forecastList);

        return (
            <div>
                <h2>
                    <u>{data.city.name}</u> 5-Days Weather Forecast:
                    <p>test</p>
                </h2>
            </div>
        );
    };

    return (
        <div>
            {typeof data.city != "undefined" ? (
                <div>
                    <ForecastTitle />
                    <div>abcd</div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default DisplayWeatherForecast;
