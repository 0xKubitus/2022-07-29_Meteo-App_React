import { useState, useEffect } from "react";

import WelcomeUser from "components/WelcomeUser";
import Loader from "components/Loader/Loader";

const openWeatherAPIurlStart = "https://api.openweathermap.org/data/2.5/forecast?";

function App() {
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    return (
        <div className="App">
            <WelcomeUser />
            {lat === 0 && lon === 0 && <Loader />}
        </div>
    );
}

export default App;
