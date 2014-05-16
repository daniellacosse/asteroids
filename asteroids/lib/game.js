(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (properties)

		{
	    this.ctx = properties.ctx
      this.width = properties.width
      this.height = properties.height
      this.fps = Game.FPS

	    this.asteroids = []
	    this.bullets = []
	    this.ship = new Asteroids.Ship({
	    	pos: new _2D.Position(50, 50),
				vel: _2D.Vector.immobile(),
				game: this
	    })
	  }

  Game.FPS = 60

  Game.prototype.addAsteroid = function ()

		{
	    this.asteroids.push(Asteroids.Asteroid.randomAsteroid(this));
	  }

  Game.prototype.draw = function()

		{
	    this.ctx.clearRect(0, 0, this.width, this.height)

	    for (var i = 0; i < this.asteroids.length; i++) {
	      this.asteroids[i].draw(this.ctx)
	    }

	    for (var i = 0; i < this.bullets.length; i++) {
	      this.bullets[i].draw(this.ctx)
	    }

	    this.ship.draw(this.ctx)
	  }

  Game.prototype.move = function()

		{
	    for (var i = 0; i < this.asteroids.length; i++) {
	      this.asteroids[i].move()
	    }

	    for (var i = 0; i < this.bullets.length; i++) {
	      this.bullets[i].move()
	    }

	    this.ship.move()
	  }

  Game.prototype.step = function()

		{
	    this.move()
	    this.draw()
	    this.checkCollisions()

      if (this.asteroids.length < parseInt($("title").html())){
        this.addAsteroid()
      }
	  }

  Game.prototype.start = function()

		{
	    this.bindKeyHandlers()
	    this.stepInterval = setInterval(this.step.bind(this), 1000 / this.FPS)
	  }

  Game.prototype.checkCollisions = function (stepInterval)

		{
	    for (var i = 0; i < this.asteroids.length; i++)

      {
        for (var j = i + 1; j < this.asteroids.length; j++)

          {
            if (this.asteroids[i].isCollidedWith(this.asteroids[j]))

              {
                Asteroids.MovingObject.elasticCollision(
                  this.asteroids[i], this.asteroids[j]
                )
              }

            if (this.asteroids[i].isCollidedWith(this.ship))

              {
                if( !alert('Game Over!') ){ window.location.reload() }
              }
          }

        for (var j = 0; j < this.bullets.length; j++)

          {
            if (this.asteroids[i].isCollidedWith(this.bullets[j]))

              {
                this.removeAsteroid(i)
                this.removeBullet(j)
              }

            // if (this.ship.isCollidedWith(this.bullets[i]))
            //
            //   {
            //     if( !alert('Game Over!') ){ window.location.reload() }
            //   }
          }
      }
	  }

  Game.prototype.stop = function(stepInterval)

		{
	    clearInterval(this.stepInterval)
	  }

  Game.prototype.fireBullet = function(mousePos)

		{
	    this.bullets.push(this.ship.fire(mousePos))
	  }

  Game.prototype.bindKeyHandlers = function()

		{
	    var ship = this.ship
      var thrustDuration = 300
      var thrustAmt = 0.5

      key("a", function(){
        ship.thrust(new _2D.Impulse(-thrustAmt, 0, thrustDuration))
      })

      key("d", function(){
        ship.thrust(new _2D.Impulse(thrustAmt, 0, thrustDuration))
      })

	    key("w", function(){
        ship.thrust(new _2D.Impulse(0, -thrustAmt, thrustDuration))
      })

      key("s", function(){
        ship.thrust(new _2D.Impulse(0, thrustAmt, thrustDuration))
      })
	  }

  Game.prototype.removeAsteroid = function (idx)

		{
	    this.asteroids.splice(idx, 1)
	  }

  Game.prototype.removeBullet = function (idx)

	  {
	    this.bullets.splice(idx, 1)
	  }

})(this);
