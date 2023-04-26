//функкция, рисующая окружности, соответственно текущему времени

   function  timeDrawing (xCordinate,yCordinate,radiusValue,startValue,stopValue,arcColor,lineWidth){
      ctx.beginPath()
      ctx.arc(xCordinate,yCordinate, radiusValue, startValue, stopValue, false)
      ctx.strokeStyle = arcColor
      ctx.lineWidth = lineWidth
      ctx.stroke()
  }



// объявление функции, определяющее текущее время, и выводящей еe
   function howTime(){

      let now = new Date();
      let sec = now.getSeconds();
      let mints = now.getMinutes();
      let hrs = now.getHours();
  
      let currentHour = document.getElementById('hours');
      if(hrs<10){
         currentHour.textContent = `0${hrs}`;
      }
      else{
         currentHour.textContent = hrs;
      }

      
      let currentMinute = document.getElementById('minutes');
      if(mints<10){
         currentMinute.textContent = `0${mints}`;
      }
      else{
         currentMinute.textContent = mints; 
      }
      

      let currentSecond = document.getElementById('seconds');
      if(sec<10){
         currentSecond.textContent = `0${sec}`;
      }
      else{
         currentSecond.textContent = sec; 
      }


// теперь текщее время определено, вызывается функция, рисующая секунды,минуты и часы
       drawSec(sec)
       drawMinutes(mints,sec)
       drawHours(hrs,sec)
   }

   

   // прослушивание событий нажатий кнопок
let startTimeCount = document.querySelector('#startButton')
let stopTimeCount = document.querySelector('#stopButton')




startTimeCount.addEventListener('click', ()=>{
 startTimeCount.style.backgroundColor = 'white'
 stopTimeCount.style.backgroundColor = 'brown'
   
   let countParam =setInterval(howTime,1000)
   
   stopTimeCount.addEventListener('click', ()=>{
      stopTimeCount.style.backgroundColor = 'white'
      startTimeCount.style.backgroundColor = 'brown'

      clearInterval(countParam)})


})


// определение типа canvas и рисование циферблата

let canvas = document.getElementById("clock")
let  ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.arc(150,150,148,0,2*Math.PI,false)
ctx.fillStyle = "wheat"
ctx.fill()


// функия рисует окружность секунд
     function drawSec(sec) {
   //  определение параметров для рисования кривой
      let stopSec = (6 * sec * (Math.PI) / 180) - (Math.PI) / 2
      let startSec = 270 * (Math.PI) / 180;


// рисование кривой секунд

        timeDrawing (150,150,140,startSec,stopSec,"black",5)




         if(sec === 1){
             timeDrawing (150,150,140,0,2*Math.PI,"wheat",8)
             timeDrawing (150,150,140,startSec,stopSec,"black",5)

         }

      }

// функия рисует кривую минут

  function drawMinutes(mints,sec) {

    let stopMinute = (6 * mints * (Math.PI) / 180) - (Math.PI) / 2
    let startMinute = 270 * (Math.PI) / 180

    if (mints !=0){

        timeDrawing(150, 150, 120, startMinute, stopMinute, "brown", 10)
    }

    else if(mints ===0 && sec ===1) {
        timeDrawing(150, 150, 120, 0, 2 * Math.PI, "wheat", 13)
    }
    else if( mints ===0 && sec === 0){
        timeDrawing(150, 150, 120, startMinute, stopMinute, "brown", 10)
    }


  }

  //функция рисует кривую часов

function drawHours(hrs,sec) {

    let stopHour = (30 * hrs * (Math.PI) / 180) - (Math.PI) / 2
    let startHour = 270 * (Math.PI) / 180

    if (hrs !=0){

        timeDrawing(150, 150, 90, startHour, stopHour, "grey", 15)
    }

    else if(hrs ===0 && sec ===1) {
        timeDrawing(150, 150, 90, 0, 2 * Math.PI, "wheat", 18)
    }
    else if( hrs ===0 && sec === 0){
        timeDrawing(150, 150, 90, startHour, stopHour, "grey", 15)
    }


}

