class Boy {
    
    constructor(){
        this.boy=Bodies.rectangle(300,640,200,50,{isStatic:true})        
        World.add(world,this.boy)
      this.image = loadImage("images/boy.png");

        }
        
    display(){
        imageMode(CENTER);
       
        fill("green");
       image(this .image,this.boy.position.x,this.boy.position.y,200,200)
        
        }
}