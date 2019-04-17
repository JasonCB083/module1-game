'use strict';

function Game(canvas) {
  this.player = null;
  this.dog = [];
  this.houses = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.gameOver = false;
  
};

Game.prototype.startLoop = function() {
  this.player = new Player(this.canvas);
  this.dog = new Dog(this.canvas);


  const loop = () => {
    if (Math.random() > 0.97) {
      if(this.houses.length < 8){
        this.houses.push(new House(this.canvas))
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
  this.dog.draw();
  this.houses.forEach((house) => {
    house.draw();
  });
}

Game.prototype.updateAll = function() {
  this.player.update();
  this.dog.update(this.player.x, this.player.y);
}

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.checkCollisions = function(){
  this.houses.forEach((house, index) => {
    const isColliding = this.player.checkCollisionWithHouse(house);
    if (isColliding) {
      this.houses.splice(index,1);
    }
  });


  const isColliding = this.player.checkCollisionWithDog(this.dog);
  if (isColliding) {
        this.gameOver = true;
        this.constructorGameOverCallback();

  }
  
}

Game.prototype.setGameOverCallBack = function(buildGameOverScreen) {
  this.constructorGameOverCallback = buildGameOverScreen;
}

