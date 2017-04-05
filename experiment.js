var panelx; //the xvalue for the panel also known as the place where all the items the player picks up goes to.
var panely; //the yvalue for the panel

var flashlocation; //this is the stages where the flashlight would go through, for example if the flashlocation was equal to 1, then the flashlight would be in it's starting position
var flashx; //the xvalue for the flashlight
var flashy; //the yvalue fot the flashlight
var flashcan; //this is the variable for the flashlight canvas. That is when you click on the flashlight and the background gets darcker in order for you to find the hidden messages.

var paperx; //the xvalue for the piece of paper
var papery; //the yvalue for the piece of paper
var paperlocation; //this is the variable for indicating the stages that the paper goes through. For example if paperlocation was equal to 2, it would be in it's moving state.
var keyx;
var keyy;
var keylocation;

var showpap; //this is the variabe for the paper since only when the screen is dark, does the paper show.

var keyringx;
var keyringy;

var searchLight;

var keyboard;

var showkey;

//This function is the preload where I put all the image and sound files.
function preload()
{
  backdrop = loadImage('https://dl.dropboxusercontent.com/s/2ezq2u9apojsf82/creepy%20room.jpg');
  flashlight = loadImage('https://dl.dropboxusercontent.com/s/ntcn428s6b89zz9/flashlight.png');
  flashCursor = loadImage('https://dl.dropboxusercontent.com/s/8q6sbeklxlzoawf/flashcurs.png');
  roomlight1 = loadImage('https://dl.dropboxusercontent.com/s/mttaa6oc2zk0cxs/creepy%20room%20idk.jpeg');
  tornpap = loadImage('https://dl.dropboxusercontent.com/s/a8cgiaybs2ds08p/piece%20of%20paper%202.png');
  stamp = loadImage('https://dl.dropboxusercontent.com/s/yupgm5yypyxcnwo/stamp.png');
  key = loadImage('https://dl.dropboxusercontent.com/s/irdofo128wybee7/key.png');
  searchLight = loadImage('https://dl.dropboxusercontent.com/s/ft355wfbdhajopd/searchlight.png');
  keyboard = loadImage('https://dl.dropboxusercontent.com/s/bl40a4vwi2g7kux/keyboard.png');

}

//This function is the setup, where I set the variable values and create the canvas for the page. 
function setup()
{
  createCanvas(1000,800);
  //variables
  panelx = 900; //the starting xvalue
  panely = 0; //the starting yvalue
  
  keyringx = 663;
  keyringy = 310;
  
  flashx = 700;
  flashy = 500;
  flashlocation = 1; //flashlocation is equal to one because stage one is the stage that the flashlight is in it's beginning position.
  flashcan = 0;
  
  paperx = 80;
  papery = 70;
  paperlocation = 1; //paperlocation is equal to one because stage one is the stage that the flashlight is in it's beginning position.
  keyx = 650;
  keyy = 500;
  keylocation = 0;
  
  paper = 1;
  
  showpap = 1;
  
  showkey = 1;
}

//Function draw is the function where all the main functions are. There are no codes only functions.
function draw()
{
  canvas1();
}

//Function Canvas1 is the function where all the code from canvas1 goes. This including showing the panel, as wellas how the flashlight moves. This is also where the canvas switches. Canvas2 is within Canvas1.
function canvas1()
{
  background(0);
  
  image(backdrop,0,0,1000,800);
  panel();

  if (flashlocation == 1)
  {
    flashx = 700;
    flashy = 500;
    image(flashlight,flashx,flashy,60,60);
  }
  else if (flashlocation == 2)
  {
    image(flashlight,flashx,flashy,60,60);

    flashx = flashx + 2.85;
    flashy = flashy - 6;

    if (flashx > 925 || flashy < 25)
    {
      flashx = 925;
      flashy = 25;
      flashlocation = 3;
    }
  }
  else if(flashlocation == 3)
  {
    flashx = 925;
    flashy = 25;
    image(flashlight,flashx,flashy,60,60);
  }
  
  if (flashcan == 4)
  {
    canvas2();
    cursor(HAND);
    image(flashCursor,mouseX-15,mouseY,30,50);
  }
  
  if (mouseX >700 && mouseX < 700+60 && mouseY > 500 && mouseY < 500+60)
  {
    cursor(HAND);
  }
  else 
  {
    cursor(ARROW); 
  }

  if (mouseX > 700 && mouseX < 700+60 && mouseY > 500 && mouseY < 500+60 && mouseIsPressed)
  {
    flashlocation = 2;
  }
  
  if (mouseX > 900 && mouseX < 900+90 && mouseY > 4 && mouseY < 4+90 && flashlocation == 3)
  {
    bigFlash();
  }
  
  if (mouseX > 900 && mouseX < 900+90 && mouseY > 4 && mouseY < 4+90 && mouseIsPressed == true)
  {
    flashcan = 4;
  }
  if(flashcan == 5)
  {
    paperx = 907;
    papery = 115;
    image(tornpap,paperx,papery,85,50);
    image(keyboard,10,10,70,30);
    image(key,keyx,keyy,100,100); 
  }
  if (mouseX > 900 && mouseX < 900+90 && mouseY > 4+100 && mouseY < 4+90+100 && paperlocation == 3)
  {
    bigPap();
  }
  if(flashcan == 3)
  {
   canvas3(); 
  }
  if(mouseX > 10 && mouseX < 10+70 && mouseY > 10 && mouseY < 10+30 && mouseIsPressed)
  {
    flashcan =3;
  }
}

function canvas3()
{
  background(0);
  panel();
  image(flashlight,flashx,flashy,60,60);
  image(tornpap,paperx,papery,85,50);
  image(keyboard,10,150,880,350);
  
  if(mouseX > 663 && mouseX < 663+53 && mouseY > 310 && mouseY < 310+53)
  {
    keyring(keyringx,keyringy);
  }
  if (showkey == 2)
  {
    tint(80);
    image(keyboard,10,150,880,350);
    noTint();
  }
  if(mouseX > 663 && mouseX < 663+53 && mouseY > 310 && mouseY < 310+53 && mouseIsPressed)
  {
    keylocation = 1;
    showkey = 2;
  }
  if(keylocation == 1)
  {
    image(key,keyx,keyy,100,100); 
  }
  else if (keylocation == 2)
  {
    image(key,keyx,keyy,100,100); 
    keyx = keyx + 5;
    keyy = keyy - 6.1;
    
    if(keyx > 900 || keyy < 195)
    {
      keyx = 900;
      keyy = 195;
      keylocation = 3;
    } 
  }
  else if (keylocation == 3)
  {
    image(key,keyx,keyy,100,100); 
    keyx = 900;
    keyy = 195;
  }
  
  if(mouseX > 650 && mouseX < 650+100 && mouseY > 500 && mouseY < 500+100 && mouseIsPressed)
  {
    keylocation = 2;
  }
  
  if(keylocation == 3)
  {
    flashcan = 5;
  }
}
//This fucntion is the function for showing the preview of the flashlight when your mouse rolls over it.
function bigFlash()
{
  image(flashlight,100,100); 
}
//Similar the bigFlash() function, this is for the preview of the paper so the player can read it.
function  bigPap()
{
  image(tornpap,100,100);
}
//This function is for the panel. I created my own function type in called boxes for the lighter grey parts of the panel.
function panel()
{
  stroke(0);
  fill(30);
  rect(panelx,panely,100,800);
  boxes(panelx,0);
  boxes(panelx,0+95);
  boxes(panelx,0+95+95);
  boxes(panelx,0+95+95+95);
  boxes(panelx,0+95+95+95+95);
}
//This is my own function that I created for the boxes so I wouldnt have to draw rectangles and can just use the first  box as a base.
function boxes(panelx,panely)
{
  fill(200);
  stroke(0);
  rect(panelx+4,panely+4,100-10,100-10); 
}

function keyring(keyringx,keyringy)
{
  noFill();
  stroke(0,255,0);
  rect(keyringx,keyringy,53,53);
}
//Canvas2 is the fucntion for finding the hidden messages. 
function canvas2()
{
  
  image(tornpap,paperx,papery,85,50);

  image(searchLight,mouseX-1540,mouseY-1420);
  panel();
  image(flashlight,flashx,flashy,60,60);
  
  fill(255);
  text("Use the flashlight to find the hidden note...",10,20);
    
  if(paperlocation == 2)
  {
    image(tornpap,paperx,papery,85,50);
    paperx = paperx + 18;
    papery = papery + 1;
    
    if(paperx > 907 || papery > 150)
    {
      paperx = 907;
      papery = 115;
      paperlocation = 3;
    }
  }
 else if (paperlocation ==3)
 {
   paperx = 907;
   papery = 115;
   image(tornpap,paperx,papery,85,50);
 }
  
  if(mouseX > 100 && mouseX < 100+100 && mouseY > 90 && mouseY < 100+20 && mouseIsPressed)
  {
    paperlocation = 2;
  }
  if (mouseX > 900 && mouseX < 900+90 && mouseY > 4+100 && mouseY < 4+90+100 && paperlocation == 3)
  {
    bigPap();
  }
  if(paperlocation == 3)
  {
    flashcan = 5; 
  }

}