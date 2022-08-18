//Global Variables
var database = [];
var RowContent = document.getElementById('RowContent')
var SearchWeather = document.getElementById('SearchWeather')


//get information from api
async function Weather(klma){
  var request =await fetch('http://api.weatherapi.com/v1/forecast.json?key=eeae70c476014afc996133359221101&days=7&q='+klma)
  var getdata =await request.json();
  database = getdata;
  displayWeather()
}


//function for display Weather
function displayWeather(){
    
    //get information about date(month - day)
    const date = new Date(database.forecast.forecastday[0].date);  
    const month = date.toLocaleString('default', { month: 'long' });
    const dayname = date.toLocaleString('default', { weekday: 'long' });
    const dayNumber = date.getDate()

    const dateSecond = new Date(database.forecast.forecastday[1].date);  
    const daynameSecond = dateSecond.toLocaleString('default', { weekday: 'long' });

    const dateThird = new Date(database.forecast.forecastday[2].date);  
    const daynameThird = dateThird.toLocaleString('default', { weekday: 'long' });

  var cartona =` 
  <div class="col-lg-4 ">
  <div class="bg-weather fontcolor rounded-start">
    <div class="d-flex justify-content-between p-2 opacity-75 ">
      <p class="mb-0">${dayname}</p>
      <p class="mb-0">${dayNumber +" "+ month}</p>
    </div>
    <div class="shadow-lg ">
      <p class="ps-3 pt-4 fs-5">${database.location.name}</p>
      <div class="d-flex justify-content-between ">
        <h2 class="ps-3 fs-temp text-white">${database.current.temp_c}&#8451;</h2>
        <div class="pe-4 mb-0 ">
        <img src="https:${database.current.condition.icon}" alt="" >
        </div>
      </div>
      <p class="ps-3 mt-3 colormood">${database.current.condition.text}</p>
      <div class="d-flex  pb-4 ">
        <div class="ps-3">
          <img src="images/icon-umberella.png" alt="">
          <span>${database.current.cloud}%</span>
        </div>
        <div class="ps-4">
          <img src="images/icon-wind.png" alt="">
          <span>${database.current.wind_kph}km/h</span>
        </div>
        <div class="ps-4">
          <img src="images/icon-compass.png" alt="">
          <span>${database.current.wind_dir}</span>
        </div>
      </div> 
    </div>
  </div>
</div>

<div class="col-lg-4">
  <div class="bg-weather2 fontcolor">
    <div class="text-center p-2 opacity-75 ">
      <p class="mb-0">${daynameSecond}</p>
    </div>
    <div class="shadow-lg ">
      <div class=" text-center pt-5">
       <img src="https:${database.forecast.forecastday[1].day.condition.icon}" alt="" >
       </div>
      <div class="text-center ">
        <h2 class="text-white pt-2">${database.forecast.forecastday[1].day.maxtemp_c}&#8451;</h2>
        <p>${database.forecast.forecastday[1].day.mintemp_c}&#176;</p>
      </div>
      <p class="text-center pb-5 mb-0 colormood">${database.forecast.forecastday[1].day.condition.text}</p> 
    </div>
  </div>
</div>

<div class="col-lg-4">
  <div class="bg-weather fontcolor rounded-end">
    <div class="text-center p-2 opacity-75 ">
      <p class="mb-0">${daynameThird}</p>
    </div>
    <div class="shadow-lg ">
      <div class=" text-center pt-5">
       <img src="https:${database.forecast.forecastday[2].day.condition.icon}" alt="" >
       </div>
      <div class="text-center ">
        <h2 class="text-white pt-2">${database.forecast.forecastday[2].day.maxtemp_c}&#8451;</h2>
        <p>${database.forecast.forecastday[2].day.mintemp_c}&#176;</p>
      </div>
      <p class="text-center pb-5 colormood">${database.forecast.forecastday[2].day.condition.text}</p> 
    </div>
  </div>
</div>
  `
  document.getElementById('RowContent').innerHTML = cartona
}

//call main function
Weather('mansoura')
 
//searsh for weather
SearchWeather.addEventListener('keyup' , function(){
    if(SearchWeather.value.length >= 3){
        Weather(SearchWeather.value)
    } 
    else{
        Weather('mansoura')
    }
})


  



 

