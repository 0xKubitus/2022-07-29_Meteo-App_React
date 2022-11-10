export function stopLoader() {
    const loader = document.getElementById("loader-div");
    loader.remove();
}

export function errorCallback(error) {
    const geolocRequestError = document.getElementById("geolocRequestError");
    if (error.code === 1) {
        stopLoader();
        geolocRequestError.classList.remove("hidden");
        geolocRequestError.innerHTML = "You've decided not to share your position. It's OK, I won't ask you again. Also, don't worry, you can still consult our list of selected cities forecasts!";
    } else if (error.code === 2) {
        stopLoader();
        geolocRequestError.classList.remove("hidden");
        geolocRequestError.innerHTML = "The network is down or the positioning service can't be reached.";
    } else if (error.code === 3) {
        stopLoader();
        geolocRequestError.classList.remove("hidden");
        geolocRequestError.innerHTML = "The attempt timed out before it could get the location data.";
    } else {
        stopLoader();
        geolocRequestError.classList.remove("hidden");
        geolocRequestError.innerHTML = "Geolocation failed due to unknown error.";
    }
}
