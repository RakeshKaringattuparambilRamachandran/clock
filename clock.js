let current_time      = new Date();
var hrs = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let sts = document.getElementById("sts");

curnthr = current_time.getHours()
if(current_time.getHours() > 12)
  var newHr = curnthr - 12
setInterval(()=>{
     
     let current_time  = new Date();
     let time  = current_time.getHours(); 
     let mint  = current_time.getMinutes();
     let secnd = current_time.getSeconds();
     
     console.log(current_time.getHours())
     
    

     if(current_time >= 11 )
         {
          console.log("pm")
          sts.innerHTML = "pm"
          }
     else if(current_time <= 11 && min <= 59)
          {
          console.log("am")
          sts.innerHTML = "am"
          }     
      
    hrs.innerHTML     = newHr;
    min.innerHTML     = current_time.getMinutes();
    sec.innerHTML     = current_time.getSeconds();
    // sts.innerHTML     = current_time.sts;               
     hrs.style.border    = '2px solid red';
     hrs.style.fontSize  = '60px'
     hrs.style.color     = 'red';
     min.style.border    = '2px solid orange';
     min.style.fontSize  = '60px'
     sec.style.border    = '2px solid yellow';
     sec.style.fontSize  = '60px'
     sts.style.color     = '2px solid blue';
     sts.style.font      = '50px, bold';

     
},1000)







let t = new Date();
console.log(current_time);
console.log(time)
console.log(newHr)