(function(root){
  var 2d = root.2d = (root.2d || {});

	Vector.inherits(2d.Position);

	var Vector = 2d.Vector = function(x, y){
		2d.Position.call(this, x, y);
		
		this.magnitude = Math.sqrt(
			
			Math.pow( x, 2 ) + Math.pow( y, 2 )
			
		);
	}

	Vector.prototype.isEqualto = function(otherVec){
		return ((this.x === otherVec.x) && (this.y === otherVec.y));
	}

	Vector.prototype.plus = function(otherVec){
		return new Vector(this.x + otherVec.x, this.y + otherVec.y);
	}

	Vector.prototype.normalized = function(){
		var mag = this.magnitude;
		
		return new Vector(this.x / mag, this.y / mag);
	}
	
	Vector.prototype.magnitude = function(newMag){
		var norm = this.normalized();
		
		return new Vector(norm.x * newMag, norm.y * newMag);
	}
	
	Vector.prototype.endpoints = function(pos){
		return [pos, new Position(pos.x + this.x, pos.y + this.y)];
	}

	Vector.prototype.operation = function(callback){
		var _x = callback(this.x);
		var _y = callback(this.y);

		return new Vector(_x, _y);
	}

	Vector.prototype.merge = function(valPair, callback){
		var _x = callback(this.x, valPair[0])
		var _y = callback(this.y, valPair[1])

		return new Vector(_x, _y);
	}
	
	Vector.prototype.vectorMerge = function(otherVector, callback){
		var _x = callback(this.x, otherVector.x)
		var _y = callback(this.y, otherVector.y)

		return new Vector(_x, _y);
	}
})(this);