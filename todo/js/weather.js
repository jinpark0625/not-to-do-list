'use strict'

export default class Weather{
    constructor(){
        // this.img =  documecoordsnt.createElement('img');
        this.API_KEY = "8e9220877c3c2baec33ccbf605141d1b"
        this.COORDS = '';
    }

    getWeather(lat, long){
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.API_KEY}&units=metric`)
        .then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = document.querySelector('.temperature');
            const weather = document.querySelector('.weahter');
            const img =  document.createElement('img');
            const p = document.createElement('p');
            const h4 = document.createElement('h4');
            const todayTemp = json.main.temp;
            const place = json.name;
            const icon = json.weather[0].icon;
            const description = json.weather[0].description;

            temperature.innerText = `${todayTemp}℃`;
            weather.appendChild(h4);
            weather.appendChild(img);
            weather.appendChild(p);
            p.innerText = description;
            h4.innerText = place;
            console.log(place);
            // img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
            img.src = `img/${icon}.png`
        })
    }
    
    saveCoords(coordsObj){
        localStorage.setItem(this.COORDS, JSON.stringify(coordsObj));
    }
    
    handleGeoSucces(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            // lati tude : latitude,
            // longitude : longitude 밑에꺼와같다 키와 벌류가 같을때
            latitude,
            longitude
        };
        // this.saveCoords(coordsObj);
        localStorage.setItem(this.COORDS, JSON.stringify(coordsObj));
        // this.getWeather(latitude, longitude);
    }
    
    handleGeoError(position){
        console.log("can't access geo location");
    }
}

