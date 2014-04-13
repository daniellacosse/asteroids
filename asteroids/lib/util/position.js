(function(root){
  var _2d = root._2d = (root._2d || {});

	var Position = _2d.Position = function(x, y){
		
		this.x = x; this.y = y;
		this.dimensions = [x, y];
		
	};
	
	Position.prototype.isEqualto = function(otherPos){
		return ((this.x === otherPos.x) && (this.y === otherPos.y));
	}
	
	Position.prototype.plus = function(otherPos){
		return new Position(
			this.x + otherPos.x, 
			this.y + otherPos.y
		);
	}
	
	Position.prototype.lineTo = function(otherPos){
		return new _2d.Vector(
			otherPos.x - this.x, 
			otherPos.y - this.y
		);
	}
	
	Position.prototype.scalesTo = function(maxX, maxY){
		//perhaps raise an error if maxX < X || maxY < Y
		
		this.maxX = maxX;
		this.maxY = maxY;
		this.pcntX = x / maxX;
		this.pcntY = y / maxY;
		this.pcntDim = [pcntX, pcntY];
	}
})(this);