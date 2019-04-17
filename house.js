'use strict';

function House(canvas) {
  
  this.size = 80;
  this.canvas = canvas;
  this.x = Math.random() * this.canvas.width;
  this.y = Math.random() * this.canvas.height;
  this.ctx = this.canvas.getContext('2d');

  this.img = new Image();
  this.img.src = "img/house.png";
}

House.prototype.draw = function() {
  this.ctx.fillStyle = 'blue';
  this.ctx.drawImage(this.img,this.x + this.size/2, this.y - this.size/2, this.size, this.size);
}







  