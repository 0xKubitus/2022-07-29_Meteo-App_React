const CardTemplate = ({ data }) => {
    const getDate = (date) => {
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
