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

        console.log(`sunset: ${sunset}`);
        console.log(`sunrise: ${sunrise}`);
        
        // if time is evening then set to sunset, else it is sunrise
        let background = (time === "Evening") ? body = body.style.background = "black" : body = body.style.background = "white"  ;
        
        return timeIcon = () => {
          let sunsetImg = new Image(100, 200);
          sunsetImg.src = 'sunset.jpg';
          document.body.appendChild(sunsetImg);

          let sunriseImg = new Image(100, 200);
          sunriseImg.src = 'sunrise.jpg';
          document.body.appendChild(sunriseImg);
        }

        return data;
  }

  return 
}

window.addEventListener('load', (event) => {
    app(); 
    getLocation();
  });