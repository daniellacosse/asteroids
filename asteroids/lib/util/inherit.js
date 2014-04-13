Function.prototype.inherits = function (SuperClass)

	{
	  var SubClass = this
	  function Surrogate() {}

	  Surrogate.prototype = SuperClass.prototype
	  SubClass.prototype = new Surrogate()
	}
	
Object.prototype.clone = function ()

	{
		var cloneee = this
	  var target = {}
		
	  for (var i in cloneee) {
	  	if (cloneee.hasOwnProperty(i)) target[i] = cloneee[i];
		}
		
		target.constructor = cloneee.constructor

		return target;
	}