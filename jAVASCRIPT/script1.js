var canvas= document.querySelector("#display");
var ctx = canvas.getContext("2d"); 
//ceas display
var angle;
var r=100;
var x=canvas.width/2;
var y=canvas.height/2;

function ceas(){
ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, false);
ctx.fill();
ctx.closePath();
angle=270*(Math.PI/180);
for(var i=0;i<13;i++){
ctx.beginPath();
ctx.moveTo(x + (r-20) * Math.cos(angle), y + (r-20) * Math.sin(angle));
ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
  ctx.lineWidth = 3;

 
  if(i%3==0)
    ctx.lineWidth=10;
  ctx.stroke();
  angle+=30*(Math.PI/180); 
  ctx.closePath();
}
}
//ceas done

ceas();
time();


function time(){
  console.log(angle);
  clearR();
  setTimeout(time,1000);
  ceas();
  secunde();
  minute();
  ora();
  

  

}
function clearR(){
  ctx.clearRect(0,0,x*2,y*2);
}
function secunde(){
  var date= new Date;
var s= date.getSeconds()-15;
  console.log("s= "+s);
ctx.beginPath();
ctx.moveTo(x , y);
ctx.lineTo(x + (r-20) * Math.cos(Math.PI/180*s*6), y + (r-20) * Math.sin(Math.PI/180*s*6));
ctx.lineWidth=2;
ctx.strokeStyle="red";
ctx.stroke();
ctx.strokeStyle="black";
ctx.closePath();

}

function minute(){
  var date= new Date;
var m= date.getMinutes()-15;
  console.log("m= "+m);
ctx.beginPath();
ctx.moveTo(x , y);
ctx.lineTo(x + (r-40) * Math.cos(Math.PI/180*m*6), y + (r-40) * Math.sin(Math.PI/180*m*6));
ctx.stroke();
ctx.closePath();

}

function ora(){
  var date= new Date;
var h= date.getHours()-3;
  console.log("h= "+h);
ctx.beginPath();
ctx.moveTo(x , y);
ctx.lineTo(x + (r-60) * Math.cos(Math.PI/180*h*30), y + (r-60) * Math.sin(Math.PI/180*h*30));
ctx.lineWidth=4;
ctx.stroke();
ctx.closePath();

}