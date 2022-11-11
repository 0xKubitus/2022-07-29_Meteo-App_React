import { getDate } from "helpers.js";

const CardTemplate = ({ data }) => {
    const date = getDate(data.dt);

    return (
        <div>
            {data !== "undefined" && (
                <div>
                    <p>{date}</p>
                    <p>{data.dt_txt} forecast</p>
                </div>
            )}
            <p>{data.weather[0].description}</p>
            <p>
                Min. = {data.main.temp_min}°F / Max = {data.main.temp_max}°F
            </p>
        </div>
    );
};
export default CardTemplate;
