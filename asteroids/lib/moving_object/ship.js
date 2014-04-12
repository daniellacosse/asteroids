(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function(properties) {
    
		properties.radius = Ship.RADIUS;
		properties.color = Ship.COLOR;

    Asteroids.MovingObject.call(this, properties);
  }
	
	Ship.RADIUS = 8;
	Ship.COLOR = "red";

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function(game) {
    if (this.vel === [0, 0]) { return null };

    return new Asteroids.Bullet(this.pos, this.vel, game);
  };

})(this);