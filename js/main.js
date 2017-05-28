var game;

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('../sw.js')
  .then(function(reg){
    console.log('Successfully registered service worker', reg);
  })
  .catch(function(err) {
    console.warn('Error whilst registering service worker', err);
  });
}

window.onload = function(){
  if (screen.width>1500){
    // desktop or laptop
    game = new Phaser.Game(640,480,Phaser.AUTO,"ph_game");
  } else {       
    // mobile device
    game = new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,"ph_game");       
  }
  game.state.add("StateMain",StateMain);
  game.state.start("StateMain");
}
