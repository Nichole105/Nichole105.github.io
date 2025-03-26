let hearts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    hearts.push(new Heart(random(width), random(-height, 0), random(20, 50), random(1, 5)));
  }
}

function draw() {
  background(255, 220, 230); // Light pink background
  for (let heart of hearts) {
    heart.fall();
    heart.display();
    heart.reset();
  }
}

// Heart class
class Heart {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.color = color(random(255), random(255), random(255));
  }

  fall() {
    this.y += this.speed;
  }

  reset() {
    if (this.y > height) {
      this.y = random(-100, 0);
      this.x = random(width);
      this.color = color(random(255), random(255), random(255));
    }
  }

  display() {
    fill(this.color);
    noStroke();
    beginShape();
    let s = this.size;
    vertex(this.x, this.y);
    bezierVertex(this.x - s / 2, this.y - s / 2, this.x - s, this.y + s / 3, this.x, this.y + s);
    bezierVertex(this.x + s, this.y + s / 3, this.x + s / 2, this.y - s / 2, this.x, this.y);
    endShape(CLOSE);
  }
}
