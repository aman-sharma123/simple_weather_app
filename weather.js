        const apiKey = "e8292ea7118951148a58cfdbe038ecf6";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                
            }else{
                let data = await response.json();

                document.querySelector(".city").textContent = data.name;
                document.querySelector(".temp").textContent = Math.round(data.main.temp) + '°C'; 
                document.querySelector(".humidity").textContent = data.main.humidity + '%';
                document.querySelector(".wind").textContent = data.wind.speed + ' m/s';

                if (data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/cloud.png";
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/sunny.png";
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rainy.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/misty.png";
                }
                document.querySelector(".error").style.display = "none";
            }    
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        });
        
        searchBox.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            checkWeather(searchBox.value);
           }
        })