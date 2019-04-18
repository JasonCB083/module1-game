'use strict';

function Game(canvas) {
  this.player = null;
  this.dog = [];
  this.houses = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.gameOver = false;
  this.score = 0;
  this.updateMarkers = null;
  // this.barkFx = new Audio('music/dogsOut.mov');
};

Game.prototype.startLoop = function() {
  this.player = new Player(this.canvas);
  // this.dog = new Dog(this.canvas);
  this.dogs = [];

  const loop = () => {
    if (Math.random() > 0.97) {
      if(this.houses.length < 8){
        this.houses.push(new House(this.canvas))
      }
    }
    if (this.dogs.length < 3) {
      if (Math.random() > 0.97) {
        const x = Math.random() * this.canvas.width;
        const y = Math.random() * this.canvas.height;
        this.dogs.push(new Dog(this.canvas, x, y))
      }
    }


    this.clearCanvas();
    this.drawAll();
    this.updateAll();
    this.checkCollisions();
    
    if(!this.gameOver){
      window.requestAnimationFrame(loop);
    }
  }
  window.requestAnimationFrame(loop);
}

Game.prototype.drawAll = function() {
  this.player.draw();
  this.dogs.forEach((dog)=> {
    dog.draw();
  }); 
  this.houses.forEach((house) => {
    house.draw();
  });
}

Game.prototype.updateAll = function() {
  this.player.update();
  this.dogs.forEach((dog) => {
    dog.update(this.player.x, this.player.y);
  })
}

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.checkCollisions = function(){
  this.houses.forEach((house, index) => {
    const isColliding = this.player.checkCollisionWithHouse(house);
    if (isColliding) {
      this.houses.splice(index,1);
      this.score += 100;
      
      this.updateMarkers(this.score);
      // console.log(this.score, "this works");
    }
  });

  this.dogs.forEach((dog) => {
    const isColliding = this.player.checkCollisionWithDog(dog);
    if (isColliding) {
      this.gameOver = true;
      // this.barkFx.currentTime = 0;
      // this.barkFx.play();
      this.constructorGameOverCallback(this.score);
  
    }
  });
  
}

Game.prototype.setGameOverCallBack = function(buildGameOverScreen) {
  this.constructorGameOverCallback = buildGameOverScreen;
}

Game.prototype.setUpdateMarkersCallBack = function(callback) {
  this.updateMarkers = callback;
}

