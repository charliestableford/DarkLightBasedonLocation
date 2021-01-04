const app = () => {

     return getLocation = async () => {
      const endpoint = 'https://api.sunrise-sunset.org/json?lat=53.7267&lng=-127.6476&date=today';
        const response = await fetch(endpoint)
        const data = await response.json();
        let body = document.querySelector("body");
        let current = new Date();
        let time = (current.getHours()>=17) ? "Evening" : "Daytime";
        console.log(`this is the time: ${time}`);

        let sunset = data.results.sunset;
        let sunrise = data.results.sunrise;

        let currentHours = current.getHours();
        let currentMinutes = current.getMinutes();
        console.log(`${currentHours}:${currentMinutes}`);

        console.log(`sunset: ${sunset}`);
        console.log(`sunrise: ${sunrise}`);
        
        // if time is evening then set to sunset, else it is sunrise
        let background = (time === "Evening") ? (body = body.style.background = "black", body.style.color = "white") : (body = body.style.background = "white", body.style.color = "black")  ;
        
        let sunsetImg = new Image(50, 50);
        sunsetImg.src = 'assets/sunset.png';
        document.body.appendChild(sunsetImg);
        sunsetImg.setAttribute("alt", "Image icon of a moon.");
        sunsetImg.setAttribute("class", "sunsetImg");

        let sunriseImg = new Image(60, 50);
        sunriseImg.src = 'assets/sunrise.png';
        document.body.appendChild(sunriseImg);
        sunriseImg.setAttribute("alt", "Image icon of the sun rising.");
        sunriseImg.setAttribute("class", "sunriseImg");

        let icon = (time === "Evening") ? (sunsetImg.style.display = "block", sunriseImg.style.display = "none") : (sunriseImg.style.display = "block", sunsetImg.style.display = "none");

        return data;
  } 
}

window.addEventListener('load', (event) => {
    app(); 
    getLocation();
  });