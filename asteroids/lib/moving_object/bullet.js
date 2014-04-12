(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(properties){

		properties.radius = Bullet.RADIUS;
		properties.color = Bullet.COLOR;

    Asteroids.MovingObject.call(this, properties);

  };

  Bullet.SPEED = 3;
	Bullet.COLOR = "red";
	Bullet.RADIUS = 2;

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.hitAsteroids = function(){
    var thisBullet = this;

    for (var i = 0; i < thisBullet.game.asteroids.length; i++) {
      if (thisBullet.game.asteroids[i].isCollidedWith(thisBullet)){
        console.log("Collision!");
        thisBullet.game.removeAsteroid(i);
        thisBullet.game.removeBullet(thisBullet);
      }
    }
  };

  Bullet.prototype.move = function(){

    Asteroids.MovingObject.prototype.move.call(this);

    this.hitAsteroids();

  };


})(this);