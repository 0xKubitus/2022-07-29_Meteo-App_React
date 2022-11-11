import { getDate } from "helpers.js";

const CardTemplate = ({ data }) => {
    const date = getDate(data[0].dt);

    return (
        <div>
            {data[0] !== "undefined" && (
                <div>
                    <p>{date}</p>
                    <p>{data[0].dt_txt}</p>
                </div>
            )}
            <p>{data[0].weather[0].description}</p>
            <p>
                Min. = {data[0].main.temp_min}°F / Max = {data[0].main.temp_max}°F
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
