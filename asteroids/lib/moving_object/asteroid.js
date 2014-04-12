(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(properties){
		
		properties.color = Asteroid.COLOR;

    Asteroids.MovingObject.call(this, properties);

  };
	
	Asteroid.COLOR = "white";

  Asteroid.inherits(Asteroids.MovingObject)

  Asteroid.randomAsteroid = function(){ // TODO: only along the perimiter

    var randomX = Math.random() * Asteroids.Game.DIM_X;
    var randomY = Math.random() * Asteroids.Game.DIM_Y;

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
    };

    return new Asteroid([randomX, randomY], randomVec());
  };

})(this);