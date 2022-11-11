import CardTemplate from "./CardTemplate";

const DisplayWeatherForecast = ({ data }) => {
    const dataList = [];
    dataList.push(data.list[0], data.list[8], data.list[16], data.list[24], data.list[32]);

    // const filterData = () => {
    //     for (i = 0; i < data.list.length; i + 8) {
    //         dataList.push(data.list[i]);
    //     }
    // };

    console.log("5days forecast data = ", dataList);

    // dataList.map()

    return (
        <div>
            <CardTemplate data={dataList} />
        </div>
    );
};

export default DisplayWeatherForecast;

// OLD DRAFT:

// const DisplayWeatherForecast = ({ data }) => {
//     const ForecastTitle = () => {
//         const dataList = data.list;
//         const forecastArray = [dataList[0], dataList[8], dataList[16], dataList[24], dataList[32]];
//         console.log("5days forecast data = ", forecastArray);

//         return (
//             <div>
//                 <h2>
//                     <u>{data.city.name}</u> 5-Days Weather Forecast:
//                     <p>test</p>
//                 </h2>
//             </div>
//         );
//     };

//     return (
//         <div>
//             {typeof data.city != "undefined" ? (
//                 <div>
//                     <ForecastTitle />
//                     <div>abcd</div>
//                 </div>
//             ) : (
//                 <div></div>
//             )}
//         </div>
//     );
// };
// }
// export default DisplayWeatherForecast;
