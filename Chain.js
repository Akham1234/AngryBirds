class Chain {
    constructor(BodyA,BodyB){
        var options ={
            bodyA : BodyA,
            bodyB : BodyB,
            stiffness : 0.04,
            length : 10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;
        strokeWeight(4);
        line(point1.x,point1.y,point2.x,point2.y);
    }
}
