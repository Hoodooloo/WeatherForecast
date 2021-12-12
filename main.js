var api = "14b2095f71441aece243149714eadba2";
url = `https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=${api}`;
            fetch(url).then(response => response.json())
            .then(data=>{
                console.log(data);
                const { name } = data;
                const { country } = data.sys
                const { icon, description } = data.weather[0];
                const { temp } = data.main;
                let cel = 0;
                cel = temp - 273;
                
                var { speed } = data.wind;
                var { deg } = data.wind;
                if (speed == undefined){
                    speed = 0;
                }

                var { humidity } = data.main;
                if (speed == undefined){
                    speed = 0;
                }

                const { temp_min } = data.main;
                minTemp = temp_min - 273
                const { temp_max } = data.main;
                maxTemp = temp_max - 273

                function epochUnix (x) {
                    unixTimestamp = x;
  
                    dateObj = new Date(unixTimestamp * 1000);
                    utcString = dateObj.toUTCString();
        
                    time = utcString.slice(-11, -4);
        
                    return time;
                }

                const { sunrise } = data.sys;
                rise = new Date(sunrise*1000);

                const { sunset } = data.sys;
                sSet = new Date(sunset*1000);


                document.querySelector(".searchCity").innerText = name;
                document.querySelector(".searchCountry").innerText = country;
                document.querySelector(".tempIcon").src="https://openweathermap.org/img/wn/"+icon+".png";
                document.querySelector(".searchTemp").innerText = Math.floor(cel)+"°C";
                document.querySelector(".searchDesc").innerText = description
                
                document.querySelector(".airSpeed").innerText = speed;
                document.querySelector(".air").innerText = deg;
                document.querySelector(".water_drop").innerText = humidity+"%";
                document.querySelector(".min_temp").innerText = Math.floor(minTemp)+"°C";
                document.querySelector(".max_temp").innerText = Math.floor(maxTemp)+"°C";

                document.querySelector(".sunrise").innerText = rise.toLocaleString();
                document.querySelector(".sunset").innerText = sSet.toLocaleString();
                
                
            })

const searchBar = document.getElementById('searchBar');
    var city;
    const list = document.getElementsByClassName(".container .cities")
    searchBar.addEventListener('keyup', (e) => {
        if(e.keyCode == 13){
            city = e.target.value;
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
            fetch(url).then(response => response.json())
            .then(data=>{
                console.log(data);
                const { name } = data;
                const { country } = data.sys
                const { icon, description } = data.weather[0];
                const { temp } = data.main;
                let cel = 0;
                cel = temp - 273;
                
                var { speed } = data.wind;
                var { deg } = data.wind;
                if (speed == undefined){
                    speed = 0;
                }

                var { humidity } = data.main;
                if (speed == undefined){
                    speed = 0;
                }

                const { temp_min } = data.main;
                minTemp = temp_min - 273
                const { temp_max } = data.main;
                maxTemp = temp_max - 273

                function epochUnix (x) {
                    unixTimestamp = x;
  
                    dateObj = new Date(unixTimestamp * 1000);
                    utcString = dateObj.toUTCString();
        
                    time = utcString.slice(-11, -4);
        
                    return time;
                }

                const { sunrise } = data.sys;
                rise = new Date(sunrise*1000);

                const { sunset } = data.sys;
                sSet = new Date(sunset*1000);


                document.querySelector(".searchCity").innerText = name;
                document.querySelector(".searchCountry").innerText = country;
                document.querySelector(".tempIcon").src="https://openweathermap.org/img/wn/"+icon+".png";
                document.querySelector(".searchTemp").innerText = Math.floor(cel)+"°C";
                document.querySelector(".searchDesc").innerText = description
                
                document.querySelector(".airSpeed").innerText = speed;
                document.querySelector(".air").innerText = deg;
                document.querySelector(".water_drop").innerText = humidity+"%";
                document.querySelector(".min_temp").innerText = Math.floor(minTemp)+"°C";
                document.querySelector(".max_temp").innerText = Math.floor(maxTemp)+"°C";

                document.querySelector(".sunrise").innerText = rise.toLocaleString();
                document.querySelector(".sunset").innerText = sSet.toLocaleString();
                
                
            })
        }
        
});


