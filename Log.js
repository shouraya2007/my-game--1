class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,80,height,angle);
    this.image = loadImage("log rep fin.png");
    Matter.Body.setAngle(this.body, angle);
  }
}