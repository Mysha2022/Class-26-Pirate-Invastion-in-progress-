class Boat {
  constructor(x, y, width, height, boatPos) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    //function that remove the curent fill value for displaying images and reverts them to original hues(background,shade and colour effect)
    noTint();
    pop();
  }

  remove(index){
    setTimeout(()=>{
     Matter.World.remove(world,boats[index].body);
     delete boats[index];
    },3000);
    }
}
