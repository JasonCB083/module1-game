'use strict';

function Dog(canvas) {

  this.size = 70;
  this.canvas = canvas;
  this.x = this.canvas.width/2;
  this.y = this.canvas.width/2;
  this.directionX = 0;
  this.ctx = this.canvas.getContext('2d');
  this.img = new Image();
  this.img.src = "./img/doggy-left.png";
  this.speed = 0.1;
  this.velocityX = 0;
  this.velocityY = 0;
}

Dog.prototype.draw = function() {
  this.ctx.fillStyle = 'blue';
  this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size)
  this.ctx.drawImage(this.img, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
}

Dog.prototype.update = function(playerX, playerY) {
  
  
  // / const vectorX = playerX - this.x;
  // const vectorY = playerY - this.y;

  // const vectorModule = Math.floor(Math.sqrt(vectorX^2 + vectorY^2));
  // // if (vectorModule === 0) {
  // //   vectorModule =1
  // // }
  
  // this.velocityX = vectorX/vectorModule;
  // this.velocityY = vectorY/vectorModule;
  
  // this.x = this.x + this.velocityX * this.speed;
  // this.y = this.y + this.velocityY * this.speed;
  //console.log(this.velocityX )
}
