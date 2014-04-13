(function(root){
  var _2D = root._2D = (root._2D || {});

	var Position = _2D.Position = function (x, y)
	
		{
			this.x = x; this.y = y
			this.dimensions = [x, y]
			this._scales = false;
		}

	Position.prototype.isEqualto = function (other)
	
		{
			return ((this.x === other.x) && (this.y === other.y))
		}	
  
	// TODO: DRY <method>s further by calling _<method>_ on duped object
	                                             
	Position.prototype.mod = function (callback) 
	
		{
			var _x = callback(this.x)
			var _y = callback(this.y)

			return new this.constructor(_x, _y)
		}
	
	Position.prototype._mod_ = function (callback)
	
		{
			this.x = callback(this.x)
			this.y = callback(this.y)
			this.dimensions = [this.x, this.y]
			if (this._scales) this._refresh_("scale")
			
			return null
		}

	Position.prototype.hits = function (other, callback)
	
		{
			var _x = callback(this.x, other.x)
			var _y = callback(this.y, other.y)

			return new this.constructor(_x, _y)
		}
	
	
	Position.prototype._hits_ = function (other, callback)
	
		{
			this.x = callback(this.x, other.x)
			this.y = callback(this.y, other.y)
			this.dimensions = [this.x, this.y]
			if (this._scales) this._refresh_("scale")
			
			return null
		}	

	Position.prototype.plus = function (other)
	
		{
			return this.hits(
				other,
				function (a, b) { return a + b }
		)}
	
	Position.prototype._plus_ = function (other)
	
		{
			this._hits_(
				other,
				function (a, b) { return a + b }
			)
			
			return null
		}
	
	Position.prototype.lineTo = function (otherPos)
	
		{ // can't use hits because we have to return a vector
			return new _2D.Vector(
				otherPos.x - this.x, 
				otherPos.y - this.y
		)}
		
	Position.prototype.distanceTo = function (otherPos)

		{ // used to overcome an inefficiency whereby 
			// we avoid creating vector objects to 
			// merely check collisions
			return Math.sqrt(
				Math.pow(this.x, 2) + Math.pow(this.y, 2)
		)}
	
	// still not 100% on "scale logic"
	Position.prototype.scalesTo = function (maxX, maxY)
	
		{	
			if (this.x > maxX || this.y > maxY) throw "Out of Bounds"
		
			this._scales = true
			
			this.maxX = maxX; this.maxY = maxY
			this.pcntX = this.x / maxX
			this.pcntY = this.y / maxY
			this.pcntDim = [ this.pcntX, this.pcntY ]
		
			return null
		}
	
	Position.prototype._refresh_ = function (prop)
	
		{
			if (prop === "scale" || prop === "s") {
			
				this.pcntX = this.x / this.maxX
				this.pcntY = this.y / this.maxY
				this.pcntDim = [ this.pcntX, this.pcntY ]
			
			} else if (prop === "dimensions" || prop === "d") {
			
				this.x = this.pcntX * this.maxX
				this.y = this.pcntY * this.maxY
				this.dimensions = [ this.x, this.y ]
			
			}	else if (prop === "all" || prop === "a") {
			
				this._refresh_("scale")
				this._refresh_("dimensions")
			}
		
			return null
		}
	
})(this);