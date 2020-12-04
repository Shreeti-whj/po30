  
class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3)
      {
        var angle = this.body.angle;
        var pos= this.body.position;
      }
      else{
        World.remove(world,this.body);
        push(); 
        this.Visbility=this.Visbility=5;
        tint(255,this.Visbility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
    }
    


