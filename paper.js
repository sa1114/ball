class Paper{

    constructor(x,y,radius){
        
        
        
        
        var options={
            isStatic :false,
            restitution:0.4,
            friction:0.5,
            density:1.2


    }
    this.body=Bodies.circle(x, y,radius/*diameter*/,options);
        this.radius/*diameter*/=/*radius*/ this.radius/*diameter*/;
        World.add(world, this.body);
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("magenta");
    fill("magenta");
    ellipse(0,0,this.radius, this.radius);
    ellipseMode(RADIUS);
    pop();
}





}