'use strict';

function main() {
  

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
        <button class="start-button">Start</button>
        
      </section>
  `);

        // <audio autoplay>
        // <source src="./Top-Gear.mp3" type="audio/mp3">
        // Your browser does not support the audio tag.
        // </audio>
        

    const startButton = document.querySelector('.start-button');
    // const song = document.querySelector('audio');
    // song.play();

    startButton.addEventListener('click', buildGameScreen);
  }
//////////////////////////////////////////////////////////

  function buildGameScreen() {
    // let splashMusic = new Audio("music/dogsOut.mov");
    // var audioGame = new Audio('music/dogsOut.mov');
    // audioGame.play();
    // audioGame.pause();
    
    // audio.currentTime = 5;

    const gameScreen = buildDom(`
      <section class="game-container">
      
        <p class= "points">Points for Mail Drops</p>
        <canvas></canvas>
        <audio src='music/dogsOut.mov' controls autoplay loop>
      </section>
    `);
    
    const gameContainerElement = document.querySelector('.game-container')
    const pointsElement = document.querySelector(".points")
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.setGameOverCallBack(buildGameOverScreen);
    game.startLoop();
    game.setUpdateMarkersCallBack(updateMarkers);


    
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 38) {
        game.player.setDirectionY(-1)
      }
      if (event.keyCode === 40) {
        game.player.setDirectionY(1)
      } 
      if (event.keyCode === 37) {
        game.player.setDirectionX(-1)
        game.player.img.src = 'img/mailman-left copy.png'
      }
      if (event.keyCode === 39) {
        game.player.setDirectionX(1)
        game.player.img.src = 'img/mailman-right copy.png'
      } 
    })
    document.addEventListener('keyup', function(event) {
      if(event.keyCode === 37 || event.keyCode === 39) {
        game.player.setDirectionX(0);
      } else if(event.keyCode === 38 || event.keyCode === 40){
        game.player.setDirectionY(0);
      }
      
      
      
    })
    function updateMarkers(points) {
    pointsElement.innerHTML = points;
  
    }
    
  }
  
  
  function buildGameOverScreen(score) {

    
    
    const gameOverScreen = buildDom(`
      <section>
        <h1 class='keyFrameGameOver'>Game Over</h1>
        <div class="img-container"> 
          <img src="img/19178-A-417x450.png" class="game-over" >
          
          <p class= "end-game-score">SCORE => ${score}</p>
          </img>
        </div>
        
        <button class="restart-button">Restart</button>
        <audio src='music/gameoverM.mov' controls autoplay loop>

      </section>
    `)
        
        

      const restartButton = document.querySelector('.restart-button');

      restartButton.addEventListener('click', buildSplashScreen);
  }
  buildSplashScreen()
} 
window.addEventListener('load', main)
