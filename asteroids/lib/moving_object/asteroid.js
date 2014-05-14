(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(properties)

  	{
      Asteroids.MovingObject.call(this, properties)
    }

  Asteroid.inherits(Asteroids.MovingObject)


  ///\\\///\\\ pixels or percent? ///\\\///\\\
  Asteroid.MIN_SPEED = 5
  Asteroid.MAX_SPEED = 50
  Asteroid.MIN_RADIUS = 5
  Asteroid.MAX_RADIUS = 50

  Asteroid.randomAsteroid = function(game)

		{
      return new Asteroid({
        game: game,
        _wraps: true,
        pos: _2D.Position.randomPerim(game.width, game.height),
        vel: _2D.Vector.random(Asteroid.MIN_SPEED, Asteroid.MAX_SPEED),
        color: "white",
        radius: Asteroid.randomRadius()
      })
	  }

  Asteroid.randomRadius = function()

    {
      return (Asteroid.MAX_RADIUS - Asteroid.MIN_RADIUS) * Math.random() + Asteroid.MIN_RADIUS
    }

})(this);
