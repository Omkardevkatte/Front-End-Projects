const apiKey = "5b79e74d7a5c59a41eaf723cfb6d25d2";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button");

        const weatherIcon = document.querySelector(".weather-icon");

        // let cityname = searchBox.value;

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block"
                document.querySelector(".weather").style.display = "none";
            }

            var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "Assets/Clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "Assets/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "Assets/rain.png";
            }
            else if(data.weather[0].main == "Drizzles"){
                weatherIcon.src = "Assets/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "Assets/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none"

            
        }

        searchBtn.addEventListener("click", (city) => {
            checkWeather(searchBox.value);
            searchBox.value = "";
            
        })
