const input=document.querySelector("input");
const btn=document.getElementById("btn");
const icon=document.querySelector("icon");
const weather=document.querySelector("weather");
const temprature=document.querySelector("temprature");
const description=document.querySelector("description");

btn.addEventListener("click",()=>{
    let city=input.value;
    getWeather(city);

    console.log("clicked");
});

function getWeather( city)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'db7c8a02e7649e437a95a9532c73c703'}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
      
         const iconCode=data.weather[0].icon;
         icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon"/>`;

         const weatherCity=data.name;
         const weatherCountry=data.sys.country;
         weather.innerHTML=`${weatherCity}, ${weatherCountry}`;


         const weatherTemp=data.main.temp;
         weatherTemp=weatherTemp-273;
         const temp=weatherTemp.toFixed(2);
         temprature.innerHTML=`${temp}°C`

         const weatherDes=data.weather[0].description;
         description.innerHTML=weatherDes;
    
    });
}




