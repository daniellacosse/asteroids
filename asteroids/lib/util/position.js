(function(root){
  var _2D = root._2D = (root._2D || {});

	var Position = _2D.Position = function (x, y)
	
	{
		this.x = x; this.y = y
		this.dimensions = [x, y]
	}
	
	Position.prototype.isEqualto = function (otherPos)
	
	{
		return ((this.x === otherPos.x) && (this.y === otherPos.y))
	}
	
	Position.prototype.plus = function (otherPos)
	
	{
		return new Position(
			this.x + otherPos.x, 
			this.y + otherPos.y
	)}
	
	Position.prototype.lineTo = function (otherPos)
	
	{
		return new _2D.Vector(
			otherPos.x - this.x, 
			otherPos.y - this.y
	)}
	
	Position.prototype.scalesTo = function (maxX, maxY)
	
	{	
		if (X > maxX || Y > maxY) throw "Out of Bounds"
		
		this.maxX = maxX
		this.maxY = maxY
		this.pcntX = this.x / maxX
		this.pcntY = this.y / maxY
		this.pcntDim = [ this.pcntX, this.pcntY ]
		
		return null
	}
	
	Position.prototype.refresh = function (prop)
	
	{
		if (prop === "scale" || prop === "s")
		
		{
			this.pcntX = this.x / this.maxX
			this.pcntY = this.y / this.maxY
			this.pcntDim = [ this.pcntX, this.pcntY ]
		} 
		
		else if (prop === "dimensions" || prop === "d")
		
		{
			this.x = this.pcntX * this.maxX
			this.y = this.pcntY * this.maxY
			this.dimensions = [ this.x, this.y ]
		}
		
		else if (prop === "all" || prop === "a")
		
		{
			this.refresh("scale")
			this.refresh("dimensions")
		}
		
		return null
	}
	
})(this);