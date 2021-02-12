var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "green";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "blue";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "purple";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = yellow;
    ball.velocityX = 0;
    ball.velocityY = 0;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(block1);

    if(block1.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "brown";
        //DO:-play the music
        music.mp3;
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "red";

        //DO:- give zero velocity to ball
        ball.velocityX = 0;
        ball.velocityY = 0;

        //DO:- stop the music
        music.stop;
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "blue";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = red;
    }

    drawSprites();
}
