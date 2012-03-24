//<script src="processing-1.3.6.min.js"></script>
//<script type="text/processing" data-processing-target="mycanvas">
int width = document.body.clientWidth;
int height = document.body.clientHeight;
int bodyw = 210;
int bodyh = 145;
int headw = 135;
int headh = 60;

int posx = (width)/2;
int nposx = posx;
int posy = (height)/2;
int nposy = posy;
int delay = 4;

int headx = posx+(headw/2)+15;
int heady = posy+48;

int taily = 0;
int rainbowy = 5;

float div = 1.4;
float speed = frameCount/div;
int pawx = -7;
float star1x = 0, star1y = random(height), adjust1 = 0;
float star2x = 0, star2y = random(height), adjust2 = 0;
float star3x = 0, star3y = random(height), adjust3 = 0;
float star4x = 0, star4y = random(height), adjust4 = 0;

void setup(){
   size(width, height);
   smooth();
   frameRate(25);
   rectMode(CENTER);
}

void mouseMoved(){
  nposx = mouseX;
  nposy = mouseY;
}

void draw() {
   background(#0c4177);
   speed = frameCount/div;
   posx+=(nposx-posx)/delay;
   posy+=(nposy-posy)/delay*1.5;

   headx = posx+(headw/2)+15;
   heady = posy+48;

   posy = posy + 1.8*sin(speed);
   heady = heady + 4*sin(speed + 0.5);
   taily = taily + 2*sin(speed + 0.5);
   headx = headx + 4*sin(speed - 0.1);
   pawx = pawx + 4*sin(speed);

   noStroke();
   for (float x = 0; x < headx/32; x+=0.5) {
      float y = sin(x+speed);
      fill(#ff0000);
      ellipse(x*32,posy-50+rainbowy+y*7,48,20);
      fill(#ffa60e);
      ellipse(x*32,posy-31+rainbowy+y*7,48,20);
      fill(#ffff02);
      ellipse(x*32,posy-12+rainbowy+y*7,48,20);
      fill(#00ff00);
      ellipse(x*32,posy+7+rainbowy+y*7,48,20);
      fill(#11acff);
      ellipse(x*32,posy+25+rainbowy+y*7,48,20);
      fill(#7644ff);
      ellipse(x*32,posy+44+rainbowy+y*7,48,20);
   }

   // Stars
   fill(#ffffff);
   star1x = width-frameCount*100+adjust1;
   star2x = width-frameCount*85+adjust2;
   star3x = width-frameCount*70+adjust3;
   star4x = width-frameCount*115+adjust4;
   if (star1x < 0) {
      star1y = random(height);
      adjust1 = adjust1 + random(width, random(7)*width);
   }
   rect(star1x, star1y, 30, 5);
   rect(star1x, star1y, 5, 30);
   if (star2x < 0) {
      star2y = random(height);
      adjust2 = adjust2 + random(width, random(5)*width);
   }
   rect(star2x, star2y, 30, 5);
   rect(star2x, star2y, 5, 30);
   if (star3x < 0) {
      star3y = random(height);
      adjust3 = adjust3 + random(width, random(5)*width);
   }
   rect(star3x, star3y, 30, 5);
   rect(star3x, star3y, 5, 30);
   if (star4x < 0) {
      star4y = random(height);
      adjust4 = adjust4 + random(width, random(7)*width);
   }
   rect(star4x, star4y, 30, 5);
   rect(star4x, star4y, 5, 30);

   // Patas
   fill(#a7a7a7);
   stroke(0, 255);
   strokeWeight(8);
   arc(posx+bodyw/2-20+pawx, posy+bodyh/2, 30, 50, 0, PI);
   arc(posx+bodyw/2-65+pawx, posy+bodyh/2, 30, 50, 0, PI);
   arc(posx-bodyw/2+40+pawx, posy+bodyh/2, 30, 50, 0, PI);
   beginShape();
   curveVertex(posx-bodyw/2+2+pawx, posy+bodyh/3-5);
   curveVertex(posx-bodyw/2+2+pawx, posy+bodyh/3-5);
   curveVertex(posx-bodyw/2-14+pawx, posy+bodyh/3+13);
   curveVertex(posx-bodyw/2-16+pawx, posy+bodyh/3+35);
   curveVertex(posx-bodyw/2-6+pawx, posy+bodyh/3+40);
   curveVertex(posx-bodyw/2+12+pawx, posy+bodyh/3+28);
   curveVertex(posx-bodyw/2+12+pawx, posy+bodyh/3+28);
   endShape();

   // Tail
   beginShape();
   curveVertex(posx-bodyw/2+2, posy+taily-12);
   curveVertex(posx-bodyw/2+2, posy+taily-12);
   curveVertex(posx-bodyw/2-30, posy+taily-18);
   curveVertex(posx-bodyw/2-43, posy+taily-30);
   curveVertex(posx-bodyw/2-60, posy+taily-30);
   curveVertex(posx-bodyw/2-61, posy+taily-10);
   curveVertex(posx-bodyw/2-40, posy+taily+3);
   curveVertex(posx-bodyw/2-3, posy+taily+10);
   curveVertex(posx-bodyw/2-1, posy+taily+10);
   curveVertex(posx-bodyw/2-1, posy+taily+10);
   endShape();

   // Body
   fill(#ffd497);
   rect(posx, posy, bodyw, bodyh, 10)
   fill(#ffb3fe);
   stroke(0, 0);
   rect(posx, posy, bodyw-25, bodyh-25, 18);

   // Dots
   fill(#f459b7);
   rect(posx+43, posy-42, 10, 10);
   rect(posx+72, posy-35, 10, 10);
   rect(posx-8, posy-28, 10, 10);
   rect(posx-40, posy-40, 10, 10);
   rect(posx-70, posy-8, 10, 10);
   rect(posx-75, posy+40, 10, 10);
   rect(posx-40, posy+15, 10, 10);
   rect(posx-15, posy+35, 10, 10);

   // Head
   fill(#a7a7a7);
   stroke(0, 255);
   beginShape();
   curveVertex(headx-headw/2,heady-headh);

   curveVertex(headx-3-headw/2,heady);
   curveVertex(headx-headw/2+5,heady-headh);
   curveVertex(headx+headw/2-5,heady-headh);
   curveVertex(headx+3+headw/2,heady);

   curveVertex(headx+headw/2,heady-headh);
   endShape();
   arc(headx, heady-1, headw+5, 35, 0, PI);


   // Ears
   stroke(0, 0);
   beginShape();
   curveVertex((headx-headw/2)-4,heady-headh+12);
   curveVertex((headx-headw/2)-4,heady-headh+12);
   curveVertex((headx-headw/2)+6, heady-headh-28);
   curveVertex((headx-headw/2)+45,heady-headh);
   curveVertex((headx-headw/2)+45,heady-headh);
   endShape();

   beginShape();
   curveVertex((headx+headw/2)+4,heady-headh+12);
   curveVertex((headx+headw/2)+4,heady-headh+12);
   curveVertex((headx+headw/2)-6, heady-headh-28);
   curveVertex((headx+headw/2)-45,heady-headh);
   curveVertex((headx+headw/2)-45,heady-headh);
   endShape();

   stroke(0, 255);
   beginShape();
   curveVertex((headx-headw/2)-4,heady-headh+8);
   curveVertex((headx-headw/2)-4,heady-headh+8);
   curveVertex((headx-headw/2)+6, heady-headh-28);
   curveVertex((headx-headw/2)+40,heady-headh-9);
   curveVertex((headx-headw/2)+40,heady-headh-9);
   endShape();

   beginShape();
   curveVertex((headx+headw/2)+4,heady-headh+8);
   curveVertex((headx+headw/2)+4,heady-headh+8);
   curveVertex((headx+headw/2)-6, heady-headh-28);
   curveVertex((headx+headw/2)-40,heady-headh-9);
   curveVertex((headx+headw/2)-40,heady-headh-9);
   endShape();

   noStroke();
   // Eyes
   fill(#000000);
   rect(headx-headw/5-3, heady-headh/1.5, 15, 15);
   rect(8+headx+headw/5, heady-headh/1.5, 15, 15);
   fill(#ffffff);
   rect(8+headx+headw/5-4, heady-headh/1.5-4, 7, 7);
   rect(5+headx-headw/5-12, heady-headh/1.5-4, 7, 7);

   // Nose
   fill(#000000);
   rect(headx+headw/8-5, heady-headh/1.5+4, 12, 8);

   // Mouth
   rect(headx+33, heady-12, 8, 8);
   rect(headx+7, heady-12, 8, 8);
   rect(headx-24, heady-12, 8, 8);
   rect(headx+5, heady-5, 65, 8);

   // Cheeks
   fill(#fdb0a0);
   rect(headx-50, heady-19, 20, 18);
   rect(headx+53, heady-19, 20, 18);
}

//<canvas id="mycanvas"></canvas>​