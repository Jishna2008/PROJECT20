var garden_Bg,Bg_Img;
var cat,cat_Img1,cat_Img2,cat_Img3;
var mouse,mouse_Img1,mouse_Img2,mouse_Img3;
function preload() {
    //load the images here
    Bg_Img=loadImage("garden.png")
    mouse_Img1=loadAnimation("mouse1.png");
    mouse_Img2=loadAnimation("mouse2.png","mouse3.png");
    mouse_Img3=loadAnimation("mouse4.png");
    cat_Img1=loadAnimation("cat1.png");
    cat_Img2=loadAnimation("cat2.png","cat3.png");
    cat_Img3=loadAnimation("cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden_Bg=createSprite(500,400,1000,800);
   garden_Bg.addImage(Bg_Img);

   cat = createSprite(800,580);
    cat.addAnimation("cat sitting",cat_Img1);
    cat.scale=0.15;
    
    mouse=createSprite(200,580)
    mouse.addAnimation("mouse",mouse_Img1)
    mouse.scale=0.12;
 

   


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x - mouse.x < (cat.width - mouse.width )/0.5){
      cat.velocityX=0;
      cat.addAnimation("catLastImg",cat_Img3);
      cat.changeAnimation("catLastImg",cat_Img3);

      mouse.addAnimation("mouseLastImg",mouse_Img3);
      mouse.changeAnimation("mouseLastImg",mouse_Img3);
  }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat running",cat_Img2)
    cat.changeAnimation("cat running",cat_Img2)

    mouse.addAnimation("mouseteasing",mouse_Img2)
    mouse.changeAnimation("mouseteasing",mouse_Img2)
}

}
