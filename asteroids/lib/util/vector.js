(function(root){
  var _2D = root._2D = (root._2D || {});
	
	var Vector = _2D.Vector = function(x, y)
	{
		_2D.Position.call(this, x, y);
		
		this.magnitude = Math.sqrt(
			
			Math.pow( x, 2 ) + Math.pow( y, 2 )
			
		);
	}
	
	Vector.inherits(_2D.Position);
	
	Vector.prototype.isEqualto = function(otherVec)
	{
		return ((this.x === otherVec.x) && (this.y === otherVec.y));
	}

	Vector.prototype.plus = function(otherVec)
	{
		return new Vector(
			this.x + otherVec.x, 
			this.y + otherVec.y
		);
	}

	Vector.prototype.normalized = function()
	{
		var mag = this.magnitude;
		
		return new Vector(
			this.x / mag, 
			this.y / mag
		);
	}
	
	Vector.prototype.ofMagnitude = function(newMag)
	{
		var factor = newMag / this.magnitude;
		
		return new Vector(
			this.x * factor, 
			this.y * factor
		);
	}
	
	Vector.prototype.endpointsAt = function(pos)
	{
		return [
			pos, 
			new _2D.Position(pos.x + this.x, pos.y + this.y)
		];
	}

	Vector.prototype.mod = function(callback)
	{
		var _x = callback(this.x);
		var _y = callback(this.y);

		return new Vector(_x, _y);
	}

	//for universal appeal, use "_2D.Position.dimensions" to pass in
	//the value pair instead of the full object:
	
	Vector.prototype.hit = function(valPair, callback)
	{
		var _x = callback(this.x, valPair[0])
		var _y = callback(this.y, valPair[1])

		return new Vector(_x, _y);
	}
})(this);