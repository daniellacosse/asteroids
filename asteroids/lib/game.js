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
	    	pos: new _2D.Position(this.width/2, this.height/2),
				vel: _2D.Vector.immobile(),
				game: this
	    })
	  }

  Game.FPS = 60

  // Game.prototype.addAsteroids = function (numOfAsteroids)
  //
	// 	{
	//     for (var i = 0; i < numOfAsteroids; i++) {
	//       this.asteroids.push(Asteroids.Asteroid.randomAsteroid());
	//     }
	//   }

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
	    // if (this.asteroids.length === 0){
	    //   if( !alert('You Win!') ){ window.location.reload() }
	    // }

	    this.move()
	    this.draw()
	    this.checkCollisions()
	  }

  Game.prototype.start = function(numberOfAsteroids)

		{
	    // this.addAsteroids(numberOfAsteroids)
	    this.bindKeyHandlers()
	    this.stepInterval = setInterval(this.step.bind(this), 1000 / this.FPS)
	  }

  Game.prototype.checkCollisions = function (stepInterval)

		{
	    // for (var i = 0; i < this.asteroids.length; i++) {
	    //   if (this.asteroids[i].isCollidedWith(this.ship)){
	    //     if( !alert('Game Over!') ){ window.location.reload() }
	    //   }
	    // }
	  }

  // Game.prototype.stop = function(stepInterval)
  //
	// 	{
	//     clearInterval(this.stepInterval)
	//   }

  // Game.prototype.fireBullet = function()
  //
	// 	{
	//     this.bullets.push(this.ship.fire(this))
	//   }

  Game.prototype.bindKeyHandlers = function()

		{
	    var ship = this.ship
      var thrustDuration = 300

      key("a", function(){ ship.thrust(new _2D.Impulse(-1, 0, thrustDuration)) })
      key("d", function(){ ship.thrust(new _2D.Impulse(1, 0, thrustDuration)) })
	    key("w", function(){ ship.thrust(new _2D.Impulse(0, -1, thrustDuration)) })
      key("s", function(){ ship.thrust(new _2D.Impulse(0, 1, thrustDuration)) })
	    // key("space", function(){ that.fire() })
	  }

  // Game.prototype.removeAsteroid = function (index)
  //
	// 	{
	//     this.asteroids.splice(index, 1)
	//   }
  //
  // Game.prototype.removeBullet = function (bullet)
  //
	//   {
	//     var bulIndex = this.bullets.indexOf(bullet)
  //
	//     if (bulIndex > -1) this.bullets.splice(bulIndex, 1)
	//   }

})(this);
