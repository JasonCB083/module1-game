# Mail Man #       

## Description
Mail Man is a game where the goal is to not hit the barrier wall or get bitten by the multiple dogs chasing you or else, it's Game Overr...


## MVP (CANVAS)
- The MVP of this Game would be to move in multiple directions within the canvas. 
- The Dogs chasing.


## Backlog
- Levels
- Multiple lives
- Different colors in levels
- Song or sound per levels
- Dogs barking
- Wall Game Over


### main.js
buildSplashScreen();
buildGameScreen();
buildGameOverScreen();


### Data & state transitions
splash()
  -destroyGameOver(if)
  -buildSplash
  -addEventListener (start game)
GameScreen()
  -destroySplash
  -destroyGameOver
  -CreateNewGame
  -game.start
GameOverScreen()
  -destroySplash
  -destroyGameOver
  -addEventListenercreate(NewGame)
  -game.start(deliverAgain)


### game.js
startGame 
-before
startloop
-add.Player
-add.dog 
(if it collides + add dog)
-check collision
canvas 
drawCanvas
clearCanvas
updateCanvas

gameOverCallback

  this.player;
  this.canvas;
  this.clearCanvas;
  this.updateCanvas;
  this.dogs;
  this.houses;
  this.gameOver;




### player.js

player(){
  this.lives  BL
  this.x;
  this.y;
  this.canvas;
  this.setDirection;
  this.ctx;
  this.setLives;  BL
  this.speed;
  this.direction;
  this.size;
}

Character.prototype.update(){
}

Character.prototype.render(){
}

Character.prototype.move(){
}

Character.prototype.checkCollisionWithBlock(wall){
}
Character.prototype.checkCollisionWithBlock(dog){
}
Character.prototype.checkCollisionWithBlock(house){
}

Character.prototype.death(){
}

Character.prototype.win(){
}

Character.prototype.movement(up, down, left, right){
}

### dog.js
draw
update=>position(player);
update(dog)=>draw;
render

dog(){
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}
dog.prototype.render(){
} @end 


## Task
- bootStrap
- canvas settings
- splashScreen
- setup gameScreen
- setup gameOverScreen

- Main.js
    linking all files

- Game.js
    Loop
- Player.js
    movement
- Dog.js
    postition & update.draw

### Trello
[Link url](https://trello.com/b/VuAkfkIN/mailman)


### Git
URls for the project repo and deploy
<!-- [Link Repo](https://github.com/Gabriel0liver/skull-jumper)
[Link Deploy](https://Gabriel0liver.github.io/skull-jumper/) -->