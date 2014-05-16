(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(properties)

		{
			properties.radius = Bullet.RADIUS;
			properties.color = Bullet.COLOR;

	    Asteroids.MovingObject.call(this, properties);
	  }

  Bullet.inherits(Asteroids.MovingObject)

  Bullet.SPEED = 0.35
	Bullet.COLOR = "red"
	Bullet.RADIUS = 0.2

})(this);
