(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function (properties)

		{
			properties.radius = Ship.RADIUS
			properties.color = Ship.COLOR

	    Asteroids.MovingObject.call(this, properties)
	  }

	Ship.RADIUS = 8
	Ship.COLOR = "red"

  Ship.inherits(Asteroids.MovingObject)

  Ship.prototype.thrust = function (impulse)

		{
	    _2D.Impulse.thrust(this.vel, impulse, this.game.fps)

			return null
	  }

  Ship.prototype.fire = function(mousePos, bulletSpeed)

		{
      var bulletVector = this.pos.lineTo(mousePos).ofMagnitude(bulletSpeed)

      bulletVector._plus_(this.vel)

	    return new Asteroids.Bullet({
			  pos: this.pos,
			  vel: bulletVector,
			  game: this.game
			})
	  }

})(this);
