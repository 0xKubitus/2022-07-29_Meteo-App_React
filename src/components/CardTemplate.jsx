const CardTemplate = ({ data }) => {
    return (
        <div>
            {data != "undefined" && <p>{data[0].dt_txt} forecast</p>}
            <p>{data[0].weather[0].description}</p>
            <p>
                Min. = {data[0].main.temp_min}°F / Max = {data[0].main.temp_max}°F
            </p>
        </div>
    );
};
export default CardTemplate;
