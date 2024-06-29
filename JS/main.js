const searchBox = document.querySelector(".search-input");
const findBtn = document.querySelector(".findBtn");
async function myHttp(country="cairo") {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=03d3f2825e5b4383a8e154638242806&q=${country}&days=3`);
    const data = await response.json()
    displayData(data)
}
myHttp()
function displayData(data) {
    const currDate = new Date(data.forecast.forecastday[0].date)
    const secDate = new Date(data.forecast.forecastday[1].date)
    const thrDate = new Date(data.forecast.forecastday[2].date)
    console.log(data.location.name);
    let dataCard = `<div class="col-lg-4">
                    <div class="card border-0 rounded-end-0">
                        <div class="card-header rounded-end-0  cardHeaderLight d-flex justify-content-between text-light text-opacity-75">
                          <span>${currDate.toLocaleDateString("en-US", { weekday: "long" })}</span>
                          <span>${currDate.toLocaleDateString("en-US", { day: "numeric", month: "long" })}</span>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-around cardBodyLight py-4">
                          <h5 class="card-title text-light text-opacity-75">${data.location.name}</h5>
                          <p class="card-text fw-medium text-light temp">${data.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C</p>
                          <img class="weatherIcon" src="${data.forecast.forecastday[0].day.condition.icon}" alt="">
                          <p class="card-text text-info">${data.forecast.forecastday[0].day.condition.text}</p>
                          <div class="text-light text-opacity-50">
                            <span class="me-4"><i class="fa-solid fa-umbrella"></i> 20%</span>
                            <span class="me-4"><i class="fa-solid fa-wind"></i> 18Km/h</span>
                            <span><i class="fa-solid fa-compass"></i> East</span>
                            
                          </div>
                          
                        </div>
                      </div>
                </div>
                <div class="col-lg-4">
                    <div class="card border-0 rounded-end-0 rounded-start-0">
                        <div class="card-header rounded-end-0 rounded-start-0 cardHeaderDark d-flex justify-content-center text-light text-opacity-75">
                          <span>${secDate.toLocaleDateString("en-US", { weekday: "long" })}</span>
                        </div>
                        <div class="card-body cardBodyDark py-4 d-flex flex-column justify-content-center align-items-center">
                        <img class="weatherIcon" src="${data.forecast.forecastday[1].day.condition.icon}" alt="">
                          <p class="card-text fw-medium text-light display-5">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
                          <p class="card-text fw-medium text-light text-opacity-75 fs-5">${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
                          <p class="card-text text-info">${data.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                      </div>
                </div>
                <div class="col-lg-4">
                    <div class="card border-0 rounded-start-0">
                        <div class="card-header rounded-start-0 cardHeaderLight d-flex justify-content-center text-light text-opacity-75">
                          <span>${thrDate.toLocaleDateString("en-US", { weekday: "long" })}</span>
                        </div>
                        <div class="card-body cardBodyLight py-4 d-flex flex-column justify-content-center align-items-center">
                        <img class="weatherIcon" src="${data.forecast.forecastday[1].day.condition.icon}" alt="">
                          <p class="card-text fw-medium text-light display-5">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
                          <p class="card-text fw-medium text-light text-opacity-75 fs-5">${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
                          <p class="card-text text-info">${data.forecast.forecastday[2].day.condition.text}</p>
                        </div>
                      </div>
                </div>`;
    document.querySelector("#weatherCard").innerHTML = dataCard
}
searchBox.addEventListener("keyup" , function(e){
    if(e.key == "Enter"){
        console.log(this.value);
        myHttp(this.value)
    }
})
findBtn.addEventListener("mousedown" , function(e){
        myHttp(searchBox.value)
})