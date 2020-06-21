var playerCount=0;
var database;
var form;

function setup()
{
    database=firebase.database();
    
    var canvas=createCanvas(500,500);
    canvas.visible=false;
    var game = new Game();
    game.start();
}

function draw()
{
    background("white");
}
