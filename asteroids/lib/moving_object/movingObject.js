(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(properties){

		this.pos = properties.pos;
    this.vel = properties.vel;
    this.radius = properties.radius;
    this.color = properties.color;
    this.game = properties.game;

  }

  MovingObject.prototype.move = function(){
		//use vel.operation & this.pos.coords
    if (this.vel.x + this.pos.x < 0){
      this.pos.x = this.vel.x + this.pos.x + Asteroids.Game.DIM_X;

    } else {
      this.pos.x = (this.pos.x + this.vel.x) % Asteroids.Game.DIM_X;
    };

    if (this.vel.y + this.pos.y < 0){
      this.pos.y = this.vel.y + this.pos.y + Asteroids.Game.DIM_X;

    } else {
      this.pos.y = (this.pos.y + this.vel.y) % Asteroids.Game.DIM_Y;
    };
  }

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos.x,
      this.pos.y,
      this.radius,
      0,
      2 * Math.PI
    );

    ctx.fill();
  }

  MovingObject.prototype.isCollidedWith = function(otherObj){
    var otherX = otherObj.pos.x;
    var otherY = otherObj.pos.y;

    var distanceX = this.pos.x - otherX; //lineTo (write distanceTo helper method)
    var distanceY = this.pos.y - otherY;

		//lineToMagnitude
    var hypotenuse = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

    return (this.radius + otherObj.radius >= hypotenuse) ? true : false;
  }

})(this);