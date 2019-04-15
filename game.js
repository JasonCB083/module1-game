'use strict';

function Game(canvas) {
  this.player = null;
  this.dogs = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.isGameOver = false;
  
};

Game.prototype.startLoop = function() {

  this.player = new Player(this.canvas);
  //this.enemies = new Enemy(this.canvas, 100);


  const loop = () => {
    this.clearCanvas();
    this.drawAll();
    this.updateAll();
    
    // if (Math.random() > 0.97) {
    //   const randomNumber = Math.floor(Math.random() * this.canvas.height);
    //   this.enemies.push(new Enemy(this.canvas, randomNumber))
    // }

    //console.log('im in the loop');
    // this.clearCanvas();
    // this.updateCanvas();
    // this.drawCanvas();
    // this.checkCollisions();
    //console.log(this.player.direction);
    
    if(!this.isGameOver){
      window.requestAnimationFrame(loop);
    }
  }
  window.requestAnimationFrame(loop);
}

Game.prototype.drawAll = function() {
  this.player.draw();
  //this.house.draw();
  //this.dogs.draw // foreach
}

Game.prototype.updateAll = function() {
  this.player.update();
}

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}