function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  frameRate(30);
  noFill();
}

function draw() {
  background(20, 20, 30);
  
  translate(width / 2, height / 2);
  
  let numPetals = 12;
  let radius = 200;
  let colorShift = frameCount % 360;
  
  for (let i = 0; i < numPetals; i++) {
    push();
    let angle = (i * 360) / numPetals + frameCount * 2;
    rotate(angle);
    
    let x = radius * sin(frameCount * 0.5) * cos(angle);
    let y = radius * cos(frameCount * 0.5) * sin(angle);
    
    stroke(lerpColor(color(255, 100, 150), color (100, 200, 255), i / numPetals)); 
    strokeWeight(3);
                           
   beginShape();
   for(let j = 0; j < 360; j += 10) {
     let rad = radius + 30 * sin(j * 5 + frameCount);
     let x = rad * cos(j);
     let y = rad * sin(j);
     vertex(x, y);   
   }
    endShape(CLOSE);
    pop();
  }
  
  fill(255, 150);
  noStroke();
  ellipse(0, 0, sin(frameCount *2) * 60 + 80);
}