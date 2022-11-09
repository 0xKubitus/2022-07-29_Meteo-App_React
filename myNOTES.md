# 1. Par défaut, tu devras récupérer la position de l'utilisateur afin d'afficher la météo des 5 prochains jours de là où il se situe.

## A) RECUPERER LA POSITION DU USER :

```
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

The above example will cause the doSomething() function to execute when the location is obtained.

<hr>
<br>

## B) FONCTION POUR AFFICHER LA METEO :

La météo devra contenir des cards qui affichent au minimum : la température minimale, la température maximale, une icône, et le jour de la semaine.

En fonction du retour de l'API, tu devras afficher une icône (soleil, nuage, pluie...). Tu peux trouver <a href="https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2">ici la documentation à propos des Weather Conditions.</a>

<br>

<details>
  <summary>
    -> Faire une requête à l'<a href="https://openweathermap.org/forecast5">API de Openweathermap.org</a> :
  </summary>
  
```
const fetchAPIdata = () => {
  fetch(api.openweathermap.org/data/2.5/forecast?lat={position.coords.latitude}&lon={position.coords.longitude}&appid={API_Key})
    .then((response) => response.json())
    .then((data) => console.log(data);
    .then((data) => console.log("Temp. min = " + data.list.first.main.temp_min);
    .then((data) => console.log("Temp. max = " + data.list.first.main.temp_max);
}
```

</details>

<hr>
</br>

<details>
  <summary>
    -> Fonction pour afficher les résultats :
  </summary>

```
const userLocationWeatherForecast = () => {
  return (
    <section className="user-location-forecast-section">
      { data.list.map((day) => (
        <div>
          <ul>
            <li><p>Date : { new Date(day.first.dt * 1000) }</p></li>
            <li>{day.weather.main}</li>
            <li>{day.main.temp_min}</li>
            <li>{day.main.temp_max}</li>
            <li>{day.main.temp_max}</li>
          </ul>
        </div>
      ))}
    </section>
  )
}
```

<hr>
</br>
</br>

# 2. Tant que l'utilisateur n'a pas renseigné s'il accepte ou non la géolocalisation (et tant que la réponse de l'API n'a pas été reçue), tu afficheras un petit loading, grâce au module NPM react-loading.

</br>
</br>

# 3. Si l'utilisateur refuse d'être géolocalisé, alors tu devras afficher un message indiquant à l'utilisateur que l'application ne peut pas afficher sa météo.
