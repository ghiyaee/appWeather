const frmInt = document.querySelector('#frmInt');
const desc = document.querySelector('#desc');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const search = document.querySelector('#search');
const citys = document.querySelector('.citys');
const city=document.querySelector('#city')
const keys = '93e8b2df642d3526ce153214fc999994'

async function getweather() {
    const resultApi = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys.value}&appid=${keys}`)).json();
    const {main:{temp},name,weather:[{description}],wind:{speed}}=resultApi
     setWeather(temp, name, description, speed)
}

function setWeather(data, data1, data2, data3) {
    city.innerHTML = `City -  ${data1}`;
    desc.innerHTML = ` ${data2}`
    temp.innerHTML = `Temp   ${ (data -273).toFixed(2)}`;
    wind.innerHTML = `Wind ${data3}`
    citys.value = ' ';
}

search.addEventListener('click', (e) => {
    getweather();
    e.preventDefault();
})