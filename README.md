<div align="center">

[![THP Badge](https://github.com/0xKubitus/Usefull-Stuff-for-README/blob/main/assets/mkdwn-badges/the-hacking-project.svg)](https://www.thehackingproject.org/)

#### July 29th 2022

</br>

# my React Weather forecast App

### Introduction to React Single Page Apps and JSX, but also:

### -> React Components;

### -> React State & LifeCycle => useState() & useEffect() hooks;

### -> conditional rendering.

</div>
</br>

<hr>
</br>

<details>
<summary>
CLICK ME TO READ THE HACKING PROJECT INSTRUCTIONS (in English)
</summary>
<br>

# 1. INTRODUCTION

Very well known in the world of development when you start using a language, and in particular React, you will have to make an application today to display the weather.

This will be the time to discover how component logic in React is more pleasant to handle!

The API documentation to use for the project is <a href="https://openweathermap.org/">here</a>.

</br>
</br>
</br>

# 2. THE PROJECT

By default, you will have to <a href="https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API">get the position</a> of the user in order to display for the next 5 days the weather of where it is located.

As long as the user has not indicated whether or not he accepts geolocation, and as long as the API response has not been received, you will display a small loading, thanks to the NPM module <a href=" https://www.npmjs.com/package/react-loading">react-loading</a>.

If the user refuses to be geolocated, then you will have to display a message telling the user that the application cannot display their weather.

Once the user's home weather is displayed, there will be 4 buttons on your page allowing you to change the city: "San Francisco", "Libreville", "Tokyo" and "Montreal".

Depending on the return from the API, you will have to display an icon (sun, cloud, rain...). You can find <a href="https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2">here</a> documentation about Weather Conditions.

The weather must contain cards that display at least: the minimum temperature, the maximum temperature, an icon, and the day of the week.

Don't forget to cut out the components of your application well to avoid repeating code unnecessarily.

</details>

</br>

<details>
<summary>
CLIQUER POUR LIRE LES CONSIGNES DE THE HACKING PROJECT (en  Français)
</summary>
<br>

# 1. INTRODUCTION

Très connue du monde du développement lorsque l'on commence à utiliser un langage, et notamment React, tu vas devoir faire aujourd'hui une application permettant d'afficher la météo.

Ce sera le moment de découvrir à quel point la logique par composant dans React est plus agréable à manipuler !

La documentation de l'API à utiliser pour le projet est <a href="https://openweathermap.org/">ici</a>.

</br>
</br>
</br>

# 2. LE PROJET

Par défaut, tu devras <a href="https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API">récupérer la position</a> de l'utilisateur afin d'afficher pour les 5 prochains jours la météo de là où il se situe.

Tant que l'utilisateur n'a pas renseigné s'il accepte ou non la géolocalisation, et tant que la réponse de l'API n'a pas été reçue, tu afficheras un petit loading, grâce au module NPM <a href="https://www.npmjs.com/package/react-loading">react-loading</a>.

Si l'utilisateur refuse d'être géolocalisé, alors tu devras afficher un message indiquant à l'utilisateur que l'application ne peut pas afficher sa météo.

Une fois la météo d'accueil de l'utilisateur affiché, il y aura sur ta page 4 boutons permettant de changer la ville : "San Francisco", "Libreville", "Tokyo" et "Montréal".

En fonction du retour de l'API, tu devras afficher une icône (soleil, nuage, pluie...). Tu peux trouver <a href="https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2"> ici</a> la documentation à propos des Weather Conditions.

La météo devra contenir des cards qui affichent au minimum : la température minimale, la température maximale, une icône, et le jour de la semaine.

N'oublie pas de bien découper les composants de ton application afin d'éviter de répéter du code inutilement.

</details>

<hr>
</br>

<div align="center">

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

</div>

versions:

      "react": "^18.2.0"
      "react-router-dom": "^6.3.0"

</br>
</br>

## How to use this repo:

Simply clone this repo on your machine, then open it in a Terminal window.

Then, create an account and get a free API key on: `https://openweathermap.org/`.
Create a `.env` file inside the `src` folder and add your API key by replacing <yourAPIkey> by the actual key you've just got from `https://openweathermap.org/`:

```
REACT_APP_OPENWEATHER_API_KEY = "<yourAPIkey>"
```

Finally, you can copy and paste the following commands in your Terminal (inside the project's directory):

```
npm i
npm start
```

That's it!  
You have access to my weather forecast app in your browser :ok_hand:
