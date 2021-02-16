const deg =6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(()=>{
    
let day = new Date();
let hh = day.getHours()*30;
let mm = day.getMinutes()*30;
let ss = day.getSeconds()*30;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})


console.log(day.getHours)
console.log("+++++++++++++++++++++++++++++++++++++++")





