const searchBar = document.getElementById('searchBar');

    console.log(searchBar);
    var city;
    const list = document.getElementsByClassName(".container .cities")
    var api = apiKey.Key;
    searchBar.addEventListener('keyup', (e) => {
        if(e.keyCode == 13){
            city = e.target.value;
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
            fetch(url).then(response => response.json())
            .then(data=>{
                console.log(data);
                const { name } = data;
                const { icon, description } = data.weather[0];
                const { temp } = data.main;
                let cel = 0;
                cel = temp - 273;

                document.querySelector(".searchCity").innerText = name;
                document.querySelector(".tempIcon").src="https://openweathermap.org/img/wn/"+icon+".png";
                document.querySelector(".searchTemp").innerText = Math.round(cel)+"°C";
                document.querySelector(".searchDesc").innerText = description
               
            })
        }
});