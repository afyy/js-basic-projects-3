window.addEventListener('load',()=>{
  let long;
  let lat;
  let tempDesc = document.querySelector('.temperature-description');
  let tempDegr = document.querySelector('.temperature-degree');
  let locTiZo = document.querySelector('.location-timezone');
  let temperatureSection = document.querySelector('.temperature');
  const temperatureSpan = document.querySelector('.temperature span');
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          var { temperature, summary, icon} = data.currently;
          //Set DOM Elements from the API
          tempDegr.textContent = temperature;
          tempDesc.textContent = summary;
          locTiZo.textContent = data.timezone;
          //FORMULA FOR CELSIUS
          let celsius = (temperature-32)*(5/9);
          //Set Icon
          setIcons(icon, document.querySelector('.icon'));

          //Change temperature to Celcius/Fahreneit
          temperatureSection.addEventListener('click', ()=>{
            if(temperatureSpan.textContent == "F"){
              temperatureSpan.textContent = "C";
              tempDegr.textContent = Math.floor(celsius);
            }
            else{
              temperatureSpan.textContent = "F";
              tempDegr.textContent = temperature;
            }
          });
        })
    });
  }

  function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g,"_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});