const app = () => {

     return getLocation = async () => {
      const endpoint = 'https://api.sunrise-sunset.org/json?lat=53.7267&lng=-127.6476&date=today';
        const response = await fetch(endpoint)
        const data = await response.json();

        let body = document.querySelector("body");
        let timing = document.querySelector("timing");
        let current = new Date();
        let time = (current.getHours()>=17) ? "Evening" : "Daytime";
        console.log(`this is the time: ${time}`);

        // check this later - not the right time?
        let sunset = data.results.sunset;
        let sunrise = data.results.sunrise;
        console.log(sunrise);
        console.log(sunset);

        let currentHours = current.getHours();
        let currentMinutes = current.getMinutes();
        console.log(`${currentHours}:${currentMinutes}`);

        let currentTime = document.createElement('div');
        currentTime.appendChild(document.createTextNode(`${currentHours}:${currentMinutes}`));
        document.body.appendChild(currentTime);
        currentTime.setAttribute("class", "currentTime");
        
        let background = (time === "Evening") ? (body.style.background = "black", body.style.color = "white", currentTime.style.color="white") : (body.style.background = "white", body.style.color = "black", currentTime.style.color="black");

        let timeIconText = document.createElement('div');
        timeIconText.appendChild(document.createTextNode('Currently residing in Vancouver, BC, Canada'));
        document.body.appendChild(timeIconText);
        timeIconText.setAttribute("class", "timeIconText");
        
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