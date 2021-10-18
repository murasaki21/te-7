
var counter = 0;
var pm = 0;

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  angleMode(DEGREES);


}

function draw() {
//differentiate am from pm
  if (pm == 12) {
      background(255);
  } else {
      background(0);
  }




  //sizetime();

  let s = second();  // 0-59
  let ms = map(s, 0, 59, 0, 360);

  let m = minute();  // 0-59
  let mm = map(m, 0, 59, 0, 360);

  let h = hour();  // 0-23

   if (h > 12 ) {
      h = h - 12;
   }

   if (h > 11 ) {
      pm = 1;
   } else {
      pm = 0;
    }

   let mh = map(h, 0, 12, 0, 360);

   print(h);

   push();
   translate(width/2,height/2);
   rotate(mh -90);
   fill(145, 255, 173);
   triangle(0, 0, 50, 5,5,10);
   pop();

   push();
   translate(width/2,height/2);
   rotate(mm -90);
   fill(240, 110, 255);
   triangle(0, 0, 100, 5,5,10);
   pop();

   push();
   translate(width/2,height/2);
   rotate(ms -90);
   fill(122, 195, 255);
   triangle(1, 1, 150, 5,5,10);
   pop();

  linetime();


 //console.log("hello");
 //counter++;
}



function linetime() {

  let h = hour();  //0-23
//  text('Current hour:\n' + h, 5, 50);

  let m = minute(); // 0-59
//  text('Current minute: \n' + m, 5, 100);

  let s = second();  // 0-59
//  text('Current second: \n' + s, 5, 150);

  push();

  fill(0);
//hour
  stroke(145, 255, 173);
    translate(0,-200);
  let maph = map(h, 0, 23, 0, width);
  rect(maph, height/2-50, 40, 100);

//mins
  stroke(240, 110, 255);
  let mapm = map(m, 0, 59, 0, width);
  ellipse(mapm, height/2+50, 40, 100);

//seconds
  stroke(122, 195, 255);
  let maps = map(s, 0, 59, 0, width);
  rect(maps, height/2+50, 40, 100);

  pop();

}


function sizetime() {

  let h = hour();  //0-23
//  text('Current hour:\n' + h, 5, 50);

  let m = minute(); // 0-59
//  text('Current minute: \n' + m, 5, 100);

  let s = second();  // 0-59
//  text('Current second: \n' + s, 5, 150);

  push();

  translate(-100,-100);
  let maph = map(h, 0, 23, 0, width);
  fill(255,0,0);
  rect(width/2, height/2-50, maph, maph);

  let mapm = map(m, 0, 59, 0, width);
  fill(255,255,0);
  rect(width/2, height/2+50, mapm, mapm);

  let maps = map(s, 0, 59, 0, width);
  let mapc = map(s, 0, 59, 0, 255);
  fill(0,0,mapc);
  rect(width/2, height/2, maps, maps);
  pop();

}
