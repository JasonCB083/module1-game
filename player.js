'use strict';

function Player(canvas) {
  this.lives = 2;
  this.size = 40;
  this.canvas = canvas;
  this.x = this.canvas.width/2;
  this.y = this.canvas.height/2;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 3;
  this.directionX = 0;
  this.directionY = 0;
  this.img = new Image();
  this.img.src = "img/mailman-right copy.png";
}

Player.prototype.draw = function () {
  this.ctx.fillStyle = 'blue';
  // this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size );
  this.ctx.drawImage(this.img,this.x - this.size/2, this.y-this.size/2, this.size, this.size );
}

Player.prototype.update = function() {
  if (this.x < 0 + this.size/2){
    this.x++
  } else if(this.x > this.canvas.width - this.size/2) {
    this.x--
  } else {
    this.x = this.x + this.directionX * this.speed;
  }
  if (this.y < 0 + this.size/2) {
    this.y++
  } else if (this.y > this.canvas.height - this.size/2){
    this.y--
  } 
  else { this.y = this.y + this.directionY * this.speed; 
  }
}

Player.prototype.setDirectionX = function(newDirection){
  this.directionX = newDirection;
}

Player.prototype.setDirectionY = function(newDirection){
  this.directionY = newDirection;
}

Player.prototype.checkCollisionWithHouse = function(house){
  const collisionRigth = this.x - this.size >= house.x - house.size/2;
  const collisionLeft = this.x - this.size * 2 <= house.x + house.size/2;
  const collisionTop = this.y - this.size/2 <= house.y + house.size/2;
  const collisionBottom = this.y + this.size/2 >= house.y - house.size/2;

  if(collisionLeft && collisionRigth && collisionTop && collisionBottom) {
    return true;
  }
  return false;
}
Player.prototype.checkCollisionWithDog = function(dog){
  const collisionRight = this.x + this.size/2 >= dog.x - dog.size/2;
  const collisionLeft = this.x - this.size /2 <= dog.x + dog.size/2;
  const collisionTop = this.y - this.size/2 <= dog.y + dog.size/2;
  const collisionBottom = this.y + this.size/2 >= dog.y - dog.size/2;

  if(collisionBottom && collisionTop && collisionLeft && collisionRight) {
    return true;
  }
  return false;
}