x=0;
y=0;
draw_circle="";
draw_rect="";
var speechrecognition=window.webkitSpeechRecognition
var recognition= new speechrecognition();
var numb=0
function start(){
    document.getElementById("status").innerHTML = "System is listening please speak"; 
  recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognised as:"+content; 
    numb=Number(content)
if (Number.isInteger(numb)) {
    document.getElementById("status").innerHTML = "started drawing circle:"
    draw_circle="set"
}
}
function setup(){
canvas=createCanvas(900,600);
}
function draw(){
if(draw_circle=="set"){
    for (let index = 0; index < numb; index++){         
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML = "circle is drawn";
    radius=Math.floor(Math.random()*100);
    circle(x,y,radius);
    draw_circle=""
   
    }
    var synth = window.speechSynthesis;
    speak_data = 'circle drawn is - '+numb;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
}