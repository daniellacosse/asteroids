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

  Ship.prototype.thrust = function (impulse) // gotta make this an impulse object
	
		{
	    this.vel._plus_(impulse)
		
			return null
	  }

  Ship.prototype.fire = function(mousePos, bulletSpeed) 
	
		{
			var bulletVector;

	    if (this.vel.magnitude === 0) return
			
			bulletVector = this.pos.lineTo(mousePos)._magnitude_(bulletSpeed)
			
	    return new Asteroids.Bullet({
				pos: this.pos, 
				vel: bulletVector, 
				game: this.game
			})
	  }

})(this);