class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
         this.offsetX=offsetX;
        this.offsetY=offsetY;
    var options={
        bodyA:bodyA,
        bodyB:bodyB,

        length:100,
        pointB :{x:this.offsetX,y:this.offsetY}
    }
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
    }
   
        display(){
    
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
        strokeWeight(4);
        var Anchor2x=pointB.x+this.offsetX
        var Anchor2y=pointB.y+this.offsetY
        var Anchor1x=pointA.x
        var Anchor1y=pointA.y
        line (Anchor1x,Anchor1y,Anchor2x,Anchor2y);
    }
    
    }
