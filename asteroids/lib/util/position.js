(function(root){
  var 2d = root.2d = (root.2d || {});

	var Position = 2d.Position = function(x, y){
		
		this.x = x; this.y = y;
		this.dimensions = [x, y];
		
	};
	
	Position.prototype.isEqualto = function(otherPos){
		return ((this.x === otherPos.x) && (this.y === otherPos.y));
	}
	
	Position.prototype.plus = function(otherPos){
		return new Position(this.x + otherPos.x, this.y + otherPos.y);
	}
	
	Position.prototype.lineTo = function(otherPos){
		return new Vector(this.x - otherPos.x, this.y - otherPos.y);
	}
})(this);