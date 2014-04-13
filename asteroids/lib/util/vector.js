(function(root){
  var _2D = root._2D = (root._2D || {});
	
	var Vector = _2D.Vector = function(x, y)
	
		{
			_2D.Position.call(this, x, y)
		
			this.magnitude = Math.sqrt(
				Math.pow(x, 2) + Math.pow(y, 2)
		)}
	
	Position.immobile = function () 

		{
			return new Vector(0, 0)
		}

	Vector.inherits(_2D.Position)

	Vector.prototype._normalize_ = function()
	
		{
			var mag = this.magnitude;
			
			this._mod_(
				function (dim) { return dim / mag }
			)

			return null;
		}
		
	Vector.prototype.normalize = function()
	
		{
			return this.clone()._normalize_()
		}

	Vector.prototype._magnitude_ = function (newMag)

		{
			var factor = newMag / this.magnitude
			
			this._mod_(
				function (dim) { return dim * factor }
		)}
	
	Vector.prototype.ofMagnitude = function (newMag)
	
		{ // clearly "magnitude" is taken		
			return this.clone()._magnitude_(newMag)
		}
		
	Vector.prototype.endpointsAt = function (pos)
	
		{ // analogue to Position's "lineTo"
			return [
				pos, 
				new _2D.Position(
					pos.x + this.x, 
					pos.y + this.y
		)]}

})(this);