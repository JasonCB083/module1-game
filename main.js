'use strict';

function main() {

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html
    return mainElement;
  }


  function buildSplashScreen() {
    const splashScreen = buildDom(`
      <section>
        <h1>Mail Man</h1>
        <button class="start-button">Start</button>
      </section>
    `);

    const startButton = document.querySelector('.start-button');

    startButton.addEventListener('click', buildGameScreen);
  }

  function buildGameScreen() {
    const gameScreen = buildDom(`
      <section class="game-container">
        <canvas></canvas>
      </section>
    `);
 

    const gameContainerElement = document.querySelector('.game-container')

    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');
    console.log(canvasElement)
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.startLoop();

    document.addEventListener('keydown', function(event) {
      console.log('key pressed')
      if (event.keyCode === 38) {
        game.player.setDirection(-1)
      } else if (event.keyCode === 40) {
        game.player.setDirection(1)
      }
    })

    document.addEventListener('keyup', function(event) {
      if(event.keyCode === 38 || event.keyCode === 40) {
        game.player.setDirection(0);
      }
    })
    
 }
    
   
    
  
  




  buildSplashScreen()



} 

window.addEventListener('load', main)
