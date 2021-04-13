class Monster{
    constructor(x,y,r){
      var options = {
          density:1,
          frictionAir:0.005
      }
      this.x=x
      this.y=y
      this.r=r
      this.image=loadImage("Monster-01.png")
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options)
      World.add(world,this.body)
    }
    
    display(){
        var MonPos = this.body.position
        push();
        translate(MonPos.x,MonPos.y-100)
        imageMode(CENTER)
        rectMode(CENTER)
        fill("blue")
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}