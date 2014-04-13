(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (properties)
	
		{
			this.pos = properties.pos
	    this.vel = properties.vel
	    this.radius = properties.radius
	    this.color = properties.color
	    this.game = properties.game
			this._wraps = properties._wraps
	  }

  MovingObject.prototype.draw = function (ctx)
	
		{
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

	MovingObject.prototype.wrapOn = function (maxX, maxY)
	
		{ 
			this._wraps = true // ??? -- still not 100% on this scale logic

			this.maxX = maxX; this.maxY = maxY
			this.pos.scaleTo(maxX, maxY)
			this.vel.scaleTo(maxX, maxY)
		}

  MovingObject.prototype.move = function()

		{
			if (this._wraps) {
				return null
				// wrap if necessary:
				
				// this.pos._hits_( vel, function(pos, dPos) {
				// 
				// 	
				// 
				// })	
			} else {
				this.pos._plus_(vel)
			}
	  }

  MovingObject.prototype.isCollidedWith = function (other)
	
		{
	    var distance = this.pos.distanceTo(other.pos)

	    return ( this.radius + other.radius >= distance )
	  }
		
	MovingObject.prototype._rebound_ = function (other)
	
		{
			var thisMass = this.radius, thatMass = other.radius;
		
			this.vel._hits_( other.vel, function (thisVel, thatVel) 
				
				{
					var numerator = thisVel * (thisMass - thatMass) + ( 2 * thatMass * thatVel )
					var denominator = thisMass + thatMass
				
					return numerator / denominator
				}
		)}
		
		MovingObject.prototype.rebound = function (other)
	
			{
				var thisMass = this.radius, thatMass = other.radius;
		
				return this.vel.hits( other.vel, function (thisVel, thatVel) 
				
					{
						var numerator = thisVel * (thisMass - thatMass) + ( 2 * thatMass * thatVel )
						var denominator = thisMass + thatMass
				
						return numerator / denominator
					}
			)}

})(this);