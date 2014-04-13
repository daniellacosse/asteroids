(function(root){
  var _2D = root._2D = (root._2D || {});
	
	var Vector = _2D.Vector = function(x, y)
	
		{
			_2D.Position.call(this, x, y)
		
			this.magnitude = Math.sqrt(
				Math.pow(x, 2) + Math.pow(y, 2)
		)}
	
	Vector.inherits(_2D.Position)

	Vector.prototype.normalize = function()
	
		{
			var mag = this.magnitude;
		
			return this.mod(
				function (dim) { return dim / mag }
		)}
	
	Vector.prototype._normalize_ = function()
	
		{
			var mag = this.magnitude;
			
			this._mod_(
				function (dim) { return dim / mag }
			)
			
			this.dimensions = [x, y]
		}
	
	Vector.prototype.ofMagnitude = function (newMag)
	
		{ // clearly "magnitude" is taken
			var factor = newMag / this.magnitude
		
			return this.mod(
				function (dim) { return dim * factor }
		)}
		
	Vector.prototype._magnitude_ = function (newMag)

		{
			var factor = newMag / this.magnitude
			
			this._mod_(
				function (dim) { return dim * factor }
		)}
	
	Vector.prototype.endpointsAt = function (pos)
	
		{ // analogue to Position's "lineTo"
			return [
				pos, 
				new _2D.Position(
					pos.x + this.x, 
					pos.y + this.y
		)]}

})(this);