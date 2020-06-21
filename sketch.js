var playerCount=0;
var database;
var form,game;

function setup()
{
    database=firebase.database();
    
    var canvas=createCanvas(500,500);
    canvas.visible=false;
    game = new Game();
    game.start();
}

function draw()
{
    background("white");
}