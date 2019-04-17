'use strict';

function main() {
  //let splashMusic = new Audio("./Top-Gear.mp3");

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html
    return mainElement;
  }
  function buildSplashScreen() {

    // splashMusic.src = "Top-Gear.mp3"
    //setTimeout(splashMusic.play(),2000);
    
    // const playPromise = splashMusic.play();
    // if (playPromise !== null){
    // playPromise.catch(() => { splashMusic.play(); })
    // } 

    const splashScreen = buildDom(`
      <section>
        <h1>Mail Man</h1>
        
        <div class="img-container"> 
          <img src="img/chase.gif" class="splashImage" >
          </img>
        </div>
        <audio autoplay>
        <source src="./Top-Gear.mp3" type="audio/mp3">
        Your browser does not support the audio tag.
        </audio>
        <button class="start-button">Start</button>
      </section>
    `);

    const startButton = document.querySelector('.start-button');
    // const song = document.querySelector('audio');
    // song.play();

    startButton.addEventListener('click', buildGameScreen);
  }
//////////////////////////////////////////////////////////

  function buildGameScreen() {
    // splashMusic.play();
    const gameScreen = buildDom(`
      <section class="game-container">
        <canvas></canvas>
      </section>
    `);
    const gameContainerElement = document.querySelector('.game-container')
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.setGameOverCallBack(buildGameOverScreen);
    game.startLoop();
        document.addEventListener('keydown', function(event) {
          if (event.keyCode === 38) {
            game.player.setDirectionY(-1)
          }
          if (event.keyCode === 40) {
            game.player.setDirectionY(1)
          } 
          if (event.keyCode === 37) {
            game.player.setDirectionX(-1)
              game.player.img.src = './img/mailman-left.png'
          }
          if (event.keyCode === 39) {
            game.player.setDirectionX(1)
            game.player.img.src = './img/mailman-right.png'
          } 
        })
        document.addEventListener('keyup', function(event) {
          if(event.keyCode === 37 || event.keyCode === 39) {
            game.player.setDirectionX(0);
          } else if(event.keyCode === 38 || event.keyCode === 40){
            game.player.setDirectionY(0);
          }
    })
    
  }


  function buildGameOverScreen() {

    const gameOverScreen = buildDom(`
      <section>
        <h1>Game Over</h1>
        <button class="restart-button">Restart</button>
      </section>
  
      `)

      const restartButton = document.querySelector('.restart-button');

      restartButton.addEventListener('click', buildSplashScreen);
  }
  buildSplashScreen()
} 
window.addEventListener('load', main)
