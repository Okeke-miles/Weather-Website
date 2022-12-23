var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var lat = document.querySelector(".lat")
var lon = document.querySelector(".lon")


button.addEventListener("click", function(){
fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=ccb4c7481d0f7519a10c115683e8fbaf")
    .then(response => response.json())
    .then(data => {
        var nameValue = data["name"];
        var tempValue = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];
        var lonValue = data["coord"]["lon"];
        var latValue = data["coord"]["lat"];


        name.innerHTML = nameValue;
        temp.innerHTML = `Temperature: ${tempValue}`;
        desc.innerHTML = `Description: ${descValue}`;
        lon.innerHTML = `Longitude: ${lonValue}`;
        lat.innerHTML = `Latitude: ${latValue}`;
        
    })

.catch(err => alert("Wrong city name!"))

})
