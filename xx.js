function setup() {
size(512, 512);
background(255);

}

function draw() {
  
for (int i=0; i<width; i=i+4) {
   stroke(random(150), random(150), random(150));
  line(0, 0, width, i);
  stroke(i/2);
}


for (int i=0; i<width; i=i+4) {
  stroke(random(150), random(150), random(150));
  line(0, height, width, i);
  stroke(i/2);
}


for (int i=0; i<width; i=i+4) {
  stroke(random(150), random(150), random(150));
  line(0, i, width, 0);
  stroke(i/2);
}
 
 
for (int i=0; i<width; i=i+4) {
  stroke(random(150), random(150), random(150));
  line(width, height, 0, height-i);
  stroke(i/2);

}