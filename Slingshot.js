class Slingshot{
    constructor(bodyA,pointB){
    var option={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.05,
    length:10
    }
    this.condition=Matter.Constraint.create(option)
    this.pointB=pointB
    this.sling1 = loadImage('sprites/sling1.png'); 
    this.sling2 = loadImage('sprites/sling2.png'); 
    this.sling3 = loadImage('sprites/sling3.png');
    World.add(world, this.condition);
    
    }
    display(){
        image(this.sling1,200,20);
         image(this.sling2,170,20);
        stroke("black");

       
          strokeWeight(4); 
       if(this.condition.bodyA!=null){
        var pointA = this.condition.bodyA.position;
        var pointB = this.pointB;
        push();
         stroke(48,22,8);
          if(pointA.x < 220) { strokeWeight(7);
             line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
              line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
               image(this.sling3,pointA.x -30, pointA.y -10,15,30);
             } else{ strokeWeight(3);
                 line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                  line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                   image(this.sling3,pointA.x + 25, pointA.y -10,15,30); 
            } pop();




         // line(pointA.x, pointA.y, pointB.x, pointB.y);
        
       }
    
    
    
    
    //line(this.condition.bodyA.position.x,this.condition.bobyA.position.y,this.condition.bodyB.position.x,this.condition.bodyB.position.y)
    }
    fly(){
    this.condition.bodyA=null;
    
    
    }
    
    
    
    
    
    
    
    

    





















}