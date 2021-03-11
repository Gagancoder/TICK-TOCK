var hours;
var seconds;
var minutes;

function setup() {
  createCanvas(1600,800);
 angleMode(DEGREES)


}

function draw() {
  background(0); 
  translate(800,400) 
  rotate(-90)
  hours = hour();
  minutes = minute();
  seconds = second();
  scAngle = map(seconds,0,60,0,360)
  minAngle = map(minutes,0,60,0,360)
  hrAngle = map(hours,0,60,0,360)
  push()
  rotate(scAngle)
  stroke("red")
  strokeWeight(5)
  line(0,0,75,0)
  pop()
  
  push()
  rotate(minAngle)
  stroke("green")
  strokeWeight(5)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(5)
  line(0,0,75,0)
  pop()
 //fill("red")
 noFill()
 strokeWeight(10)
 stroke("red")
  arc(0,0,300,300,0,scAngle)
  //fill("green")
  stroke("green")
  arc(0,0,280,280,0,minAngle)
  //fill("blue")
  stroke("blue")
  arc(0,0,260,260,0,hrAngle)
  drawSprites();
}