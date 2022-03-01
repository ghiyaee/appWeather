const frmInt = document.querySelector('#frmInt');
const desc = document.querySelector('#desc');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const search = document.querySelector('#search');
const citys = document.querySelector('.citys');
const city = document.querySelector('#city');
const section = [...document.querySelector('section').children];
const hiden=document.querySelector('.hiden')
const keys = '93e8b2df642d3526ce153214fc999994';
const cityArray = [];
load();

async function getweather() {
    if (!citys.value == '') {
    
        const resultApi = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys.value}&appid=${keys}`)).json();
        const { main: { temp }, name, weather: [{ description }], wind: { speed } } = resultApi;
        setWeather(name, description, temp, speed);
    }
    else {
       setTimeout(() => {
        hiden.classList.remove('hiden')
    },2000)
    }
}

function setWeather(data, data1, data2, data3) {
    city.innerHTML = `City -  ${data}`;
    desc.innerHTML = ` ${data1}`;
    temp.innerHTML = `Temp   ${ (data2 -273).toFixed(2)}`;
    wind.innerHTML = `Wind ${data3}`;
    citys.value = ' ';
    section.forEach(p=> {
        p.style.transform = `translateX(0)`; 
    })
}

function load() {
    citys.value=JSON.parse(localStorage.getItem('city'))
     getweather()
}
search.addEventListener('click', (e) => {
    getweather();
    if (cityArray == '') {
        cityArray.push(citys.value.trim());
        localStorage.setItem('city', JSON.stringify(cityArray))
    } else {
        cityArray.pop()
        
    }
    // e.preventDefault();
})