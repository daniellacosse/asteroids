(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (ctx) 
	
		{
	    this.ctx = ctx
	    this.asteroids = []
	    this.bullets = []
	    this.ship = new Asteroids.Ship({
	    	pos: _2D.Position.origin,
				vel: _2D.Vector.immobile,
				game: this
	    })
	  }
	
  Game.DIM_X = 800; Game.DIM_Y = 800; Game.FPS = 60

  Game.prototype.addAsteroids = function (numOfAsteroids)
	
		{
	    for (var i = 0; i < numOfAsteroids; i++) {
	      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
	    }
	  }

  Game.prototype.draw = function()
	
		{
	    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)

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
	    if (this.asteroids.length === 0){
	      if( !alert('You Win!') ){ window.location.reload() }
	    }

	    this.move()
	    this.draw()
	    this.checkCollisions()
	  }

  Game.prototype.start = function(numberOfAsteroids)
	
		{
	    this.addAsteroids(numberOfAsteroids)
	    this.bindKeyHandlers()
	    var stepInterval = setInterval(this.step.bind(this), 1000 / this.FPS)
	  }

  Game.prototype.checkCollisions = function (stepInterval) 
	
		{
	    for (var i = 0; i < this.asteroids.length; i++) {
	      if (this.asteroids[i].isCollidedWith(this.ship)){
	        if( !alert('Game Over!') ){ window.location.reload() }
	      }
	    }
	  }

  Game.prototype.stop = function(stepInterval)
	
		{
	    clearInterval(stepInterval)
	  }

  Game.prototype.fireBullet = function()
	
		{
	    this.bullets.push(this.ship.fire(this))
	  }

  Game.prototype.bindKeyHandlers = function()
	
		{
	    var that = this

	    key("a", function(){ that.ship.power([-1, 0]) })
	    key("d", function(){ that.ship.power([1, 0]) })
	    key("w", function(){ that.ship.power([0, -1]) })
	    key("s", function(){ that.ship.power([0, 1]) })
	    key("space", function(){ that.fire() })
	  }

  Game.prototype.removeAsteroid = function (index)
	
		{
	    this.asteroids.splice(index, 1)
	  }

  Game.prototype.removeBullet = function (bullet)
	
	  {
	    var bulIndex = this.bullets.indexOf(bullet)

	    if (bulIndex > -1) this.bullets.splice(bulIndex, 1)
	  }

})(this);