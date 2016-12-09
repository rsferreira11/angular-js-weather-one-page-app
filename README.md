# Angular.js Training: One page Weather App

### Installing

at project directory run:
```
docker build -t nodejs .
docker run -p 49160:8080 -d nodejs
```

then access: [localhost:49160](http://localhost:49160)

### Description

A Training project made with angular.js
Input: city name
Output: Forecast for the next 2, 5 or 7 days

Forecast given by [Open Weather Map](http://openweathermap.org/)

### For Angular.js learners

Take a look how the app loads the different views and how the Controllers, Services, Routes was structured. If you keep this archtecture you can have a scalable project without problem.

#### PS

The focus in this project was given in the code and not in the UI (user interface)