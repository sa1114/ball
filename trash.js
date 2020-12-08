class Trash{

    constructor(x,y,width,height)
{
var boxoptions={

isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2


}
    this.body=Bodies.rectangle(x,y,width,height,boxoptions);
    this.width=width;
    this.height=height;
    World.add(world,this.body);


}

display(){
var pos =this.body.position;
var angle=this.body.angle;
push();
 translate(pos.x,pos.y);
 rotate(angle);
rectMode(CENTER);
stroke("white");
    fill("white");
    rect(0,0,this.width,this.height);
    pop();






}


}