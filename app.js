const frmInt = document.querySelector('#frmInt');
const city = document.querySelector('#city');
const desc = document.querySelector('#desc');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const cityIat = document.querySelector('#citylat');
const cityIon = document.querySelector('#citylon');
const search = document.querySelector('#search')

const keys = '93e8b2df642d3526ce153214fc999994'

async function getweather() {
    const reslw =await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityIat.value}&lon=${cityIon.value}&appid=${keys}`)).json();
      
       
    const { main: { temp }, name,weather:[{description}],wind:{speed}} = reslw
    
   setin(temp, name, description, speed)
}

function setin(data,data1,data2,data3) {
    city.innerHTML = `city ${data1}`;
    desc.innerHTML = `desc ${data2}`
    temp.innerHTML =  `temp   ${ (data -273).toFixed(2)}`;
    wind.innerHTML =  `wind ${data3}`
}

search.addEventListener('click', (e) => {
  
    getweather()
     temp.innerHTML=temp

    e.preventDefault()
})