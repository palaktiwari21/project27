class Line{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness:0.4,
            length:5,
            pointB:{x:this.offsetX,y:offsetY}
        }

        this.Line=Constraint.create(options);
        World.add(world,this.Line);
    }

    display(){
var pointA=this.Line.bodyA.position;
var pointB=this.Line.bodyB.position;

strokeWeight(4);
line (pointA.x,pointA.y,pointB.x,pointB.y);

    }
}