window.navigator.geolocation.getCurrentPosition(async lokatsiya=>{
const lat=lokatsiya.coords.latitude
const long=lokatsiya.coords.longitude

let response= await fetch(`http://api.aladhan.com/v1/timings/calendar?latitude=${lat}&longitude=${long}&method=3&school=1&month=${new Date().getMonth()}&year=${new Date().getFullYear()}`);
response = await response.json()

let times=["Dhuhr","Fajr","Asr","Isha","Maghrib"]

for(let data in response.data.timings){
    if(times.indexOf(data) !== -1){
    const newTrElement=document.createElement('tr')
    const newNameElement=document.createElement('td')
    const newTimeElement=document.createElement('td')
    const tbodyElement=document.querySelector(".tbody")
    newNameElement.textContent=data
    newTimeElement.textContent=response.data.timings[data]
    newTrElement.appendChild(newNameElement)
    newTrElement.appendChild(newTimeElement)
    tbodyElement.appendChild(newTrElement)


}
} 
},error =>{
    // console.log(error)
    alert("you don't give me permission to get location")
})