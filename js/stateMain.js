var StateMain={
  init: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
  },
  preload: function() {
    game.load.image('background', 'images/background.jpg');
    game.load.image('brown_marble', 'images/brown_marble.png');
    game.load.image('green_marble', 'images/green_marble.png');
    game.load.image('yellow_marble', 'images/yellow_marble.png');
    //game.load.spritesheet("mondo", "images/mondo.png", 320, 265, 8);
    //game.load.audio("lipSmack", "sounds/SmackLips.mp3");

    game.scale.forceOrientation(true);
    game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
  },
  create: function() {
    // Background
    var background = game.add.image(game.world.centerX, game.world.centerY, 'background');
    background.anchor.set(0.5);
    background.width = game.width;
    background.height = game.height;

    //Bound bars
    this.topBar = this._createBar(20, 12, background);
    this.middleBar = this._createBar(20, 150, background);
    this.bottomBar = this._createBar(20, 328, background);

    // Pieces
    this.units = this._createMarblesGroup(584, 50, 'brown_marble', background);
    this.tens = this._createMarblesGroup(537, 50, 'brown_marble', background);
    this.hundreds = this._createMarblesGroup(490, 50, 'brown_marble', background);
    this.munits = this._createMarblesGroup(444, 50, 'green_marble', background);
    this.mtens = this._createMarblesGroup(398 , 50, 'green_marble', background);
    this.mhundreds = this._createMarblesGroup(351, 50, 'green_marble', background);
    this.uunits = this._createMarblesGroup(303, 50, 'brown_marble', background);
    this.utens = this._createMarblesGroup(258, 50, 'brown_marble', background);
    this.uhundreds = this._createMarblesGroup(210, 50, 'brown_marble', background);
    this.muunits = this._createMarblesGroup(165, 50, 'green_marble', background);
    this.mutens = this._createMarblesGroup(118, 50, 'green_marble', background);
    this.muhundreds = this._createMarblesGroup(72, 50, 'green_marble', background);
    this.xunits = this._createMarblesGroup(24, 50, 'yellow_marble', background);

    // Initializers
    this._setListeners();
  },
  update: function() {
    var groupCollisions = {
      bars: [
        this.topBar,
        this.middleBar,
        this.bottomBar
      ],
      groups: [
        this.units, this.tens, this.hundreds,
        this.munits, this.mtens, this.mhundreds,
        this.uunits, this.utens, this.uhundreds,
        this.muunits, this.mutens, this.muhundreds,
        this.xunits
      ]
    };

    groupCollisions.groups.forEach(function(item){
      game.physics.arcade.collide.call(game.physics.arcade, item);
    });

    groupCollisions.bars.forEach(function(bar){
      groupCollisions.groups.forEach(function(group){
        game.physics.arcade.collide.call(game.physics.arcade, bar, group);
      });
    });
  },
  render: function() {
    //game.debug.body(this.topBar);
    //game.debug.body(this.middleBar);
    //game.debug.body(this.bottomBar);
  },
  _setListeners: function() {
      game.scale.enterIncorrectOrientation.add(this._wrongWay,this);
      game.scale.leaveIncorrectOrientation.add(this._rightWay,this);
  },
  _wrongWay: function() {
      document.getElementById("wrong_way").style.display="block";
  },
  _rightWay: function() {
      document.getElementById("wrong_way").style.display="none";
      game.state.restart();
  },
  _createBar: function(x, y, b) {
    var bar = game.add.sprite(b.scale.x * x,b.scale.y * y, null);
    game.physics.arcade.enable(bar);
    bar.body.setSize(b.scale.x * 600, b.scale.y * 18, 0, 0);
    bar.body.bounce.set(0);
    bar.body.immovable = true;
    return bar;
  },
  _toggleGravity: function(marble) {
    if(marble.active){
       marble.body.velocity.y = 400;
    }else{
      marble.body.velocity.y = -400;
    }
    marble.active = !marble.active;
  },
  _createMarblesGroup: function(x, y, marble_name, b) {
    var i, group = game.add.group();
    for (i = 0; i < 3; i++) {
      var marble = group.create(b.scale.x * x, (b.scale.y * 32 * i) + b.scale.y * y, marble_name);
      marble.scale.setTo(b.scale.x, b.scale.y);
      marble.active = false;
      marble.inputEnabled = true;
      marble.events.onInputDown.add(this._toggleGravity, this);
    }
    for (i = 0; i < 4; i++) {
      var marble = group.create(b.scale.x * x, (b.scale.y * 32 * i) + b.scale.y * (y + 150), marble_name);
      marble.scale.setTo(b.scale.x, b.scale.y);
      marble.active = false;
      marble.inputEnabled = true;
      marble.events.onInputDown.add(this._toggleGravity, this);
    }
    game.physics.arcade.enable(group);
    group.setAll('body.bounce', 0);
    group.setAll('body.velocity.y', 400);
    return group;
  }
}