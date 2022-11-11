const CardTemplate = ({ data }) => {
    return (
        <div>
            {data !== "undefined" && <p>{data.dt_txt} forecast</p>}
            <p>{data.weather[0].description}</p>
            <p>
                Min. = {data.main.temp_min}°F / Max = {data.main.temp_max}°F
            </p>
        </div>
    );
};
export default CardTemplate;
