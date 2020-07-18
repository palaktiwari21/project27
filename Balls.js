class Ball{

    constructor(x,y,height){
    var options=
    {
        isStatic :true 
        
        
    
    }
    
    this.body=Bodies.circle(x,y,height,options);
    
    this.height=height;
    World.add(world,this.body);
    
    
    }
    display() {
    var  pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(0,0,this.height);
    pop();
    
    }
    }