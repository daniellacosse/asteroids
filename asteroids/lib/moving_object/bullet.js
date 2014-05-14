(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(properties)

		{
			properties.radius = Bullet.RADIUS;
			properties.color = Bullet.COLOR;

	    Asteroids.MovingObject.call(this, properties);
	  }

  Bullet.inherits(Asteroids.MovingObject)

  Bullet.SPEED = 3
	Bullet.COLOR = "red"
	Bullet.RADIUS = 2

})(this);
