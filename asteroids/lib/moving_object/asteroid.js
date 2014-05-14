(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(properties)

  	{
  		properties.color = Asteroid.COLOR
  		properties.radius = Asteroid.RADIUS

      Asteroids.MovingObject.call(this, properties)
    }

  Asteroid.inherits(Asteroids.MovingObject)

  ///\\\///\\\ default color and radius ///\\\///\\\
	Asteroid.COLOR = "white"
	Asteroid.RADIUS = 5

  Asteroid.randomAsteroid = function()

		{ 																										// TODO: only along the perimiter
	    var randomX = Math.random() * Asteroids.Game.DIM_X; // should have a 'random' factory method for
	    var randomY = Math.random() * Asteroids.Game.DIM_Y; // _2D::Position

	    var randomVec = function(){
	      var randomX = (
	        (((Math.random() * 4) + 1) / 100) * Asteroids.Game.DIM_X
	      ) / (1000/Asteroids.Game.FPS);

	      var randomY = (
	        (((Math.random() * 4) + 1) / 100) * Asteroids.Game.DIM_Y
	      ) / (1000/Asteroids.Game.FPS);

	      randomX *= Math.random() < 0.5 ? -1 : 1;
	      randomY *= Math.random() < 0.5 ? -1 : 1;

	      return [randomX, randomY];
	    }

	    return new Asteroid([randomX, randomY], randomVec());
	  }

})(this);
