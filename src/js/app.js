var rpdg = rpdg || {};

console.log('JS Loaded');

rpdg.arrayOfCorrectAnswers = [
  'alaska thunderfuck 5000',
  'alyssa edwards',
  'bianca del rio',
  'willam belli',
  'shangela laquifa wadley',
  'katya zamolodchikova'
];

rpdg.arrayOfTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

rpdg.arrayOfRounds = [
  'roundOne',
  'roundTwo',
  'roundThree',
  'roundFour',
  'roundFive',
  'roundSix',
  'bonusRound'
];

rpdg.level = 0;
rpdg.score = 10;
rpdg.i = 0;

rpdg.arrayOfCorrectAudio = [
  '/public/assets/audio/celebration-bianca.mp3',
  '/public/assets/audio/celebration-shangela.mp3',
  '/public/assets/audio/celebration-shannel.mp3',
  '/public/assets/audio/celebration.mp3'
];




rpdg.hideIntroduction = function hideIntroduction() {
  this.$main.show();
  this.$show.slideToggle('slow');
  this.$logo.show();
  this.$footer.show();
};

rpdg.soundClipIntro = function soundClipIntro() {
  this.$introAudio.src = ('/public/assets/audio/intro-car.wav');
  this.$introAudio.play();

};

rpdg.takeTile = function takeTile() {
  const randomNum = Math.floor(Math.random() * this.arrayOfTiles.length);
  const randomTileIndex = this.arrayOfTiles.splice(randomNum, 1);
  this.$tiles.eq(randomTileIndex).addClass('hidden');
  this.$takeTileAudio.src = ('/public/assets/audio/tile-remove.mp3');
  this.$takeTileAudio.play();
  console.log(this.arrayOfTiles);

};
// //
// rpdg.stopTile = function stopTile() {
//
//   if (this.arrayOfTiles.length > 0) {
//     this.$takeTile.hide();
//   }  else console.log('wtf?!');
// };

rpdg.updateScore = function updateScore() {

  if ((this.score === 0) || (this.arrayOfTiles.length < 1)) {
    this.$result.html('Submit an answer or press reset to try again!');
    this.$gifs.attr('src', '/public/assets/images/lose.gif');
    this.$takeTile.hide();
  } else {
    this.score -= 1;
    this.$playerScore.html(Math.abs(this.score));
  }

};

rpdg.getInput = function getInput() {
  event.preventDefault();

  const $stringAnswer = this.$playerAnswer.val();
  console.log($stringAnswer);

  const $lowerCaseStringAnswer = $stringAnswer.toLowerCase();
  console.log($lowerCaseStringAnswer);

  if (this.$grid.hasClass('roundSix') && ($lowerCaseStringAnswer === this.arrayOfCorrectAnswers[this.i])) {

    this.$bonusRound.slideToggle('slow');
    this.$afterRoundsScore.html(this.score);
    this.$body.addClass('frozen');
    this.$resultAudio.src = '/public/assets/audio/before-bonus.mp3';

  } else if ($lowerCaseStringAnswer === this.arrayOfCorrectAnswers[this.i]){
    this.$result.html('You clocked it! Press the Next Round button to take it to the next level!');
    this.level ++;
    this.$submitBtn.hide();
    console.log('Next level to play =', this.arrayOfRounds[this.level]);
    this.$gifs.attr('src', '/public/assets/images/win.gif');
    const randomAudioIndex = Math.floor(Math.random() * this.arrayOfCorrectAudio.length);
    this.$resultAudio.src = this.arrayOfCorrectAudio[randomAudioIndex];
    this.$resultAudio.play();
    this.$nextRoundBtn.show();
    this.$takeTile.hide();

  } else {
    this.$result.html('Not quite! Try again, take another tile or press reset!');
    this.$gifs.attr('src', '/public/assets/images/try-another.gif');
    this.$resultAudio.src = ('/public/assets/audio/try-another.mp3');

  }

};

rpdg.clearInput = function clearInput() {
  this.$playerAnswer.val('');
};

rpdg.clearingClassesAndDivs = function clearingClassesAndDivs() {
  this.$takeTile.show();
  this.$tiles.removeClass('hidden');
  this.$result.html('');
  this.$gifs.attr('src', '/public/assets/images/blank.gif');
  this.arrayOfTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.$playerScore.html(this.score);
};

rpdg.nextRound = function nextRound() {
  this.$submitBtn.show();
  this.score += 10;// add ten for the next level
  this.i++;
  this.$grid.addClass(this.arrayOfRounds[this.level]);
  this.$nextRoundBtn.hide();//hide the next round button
  rpdg.clearingClassesAndDivs();

};

rpdg.resetGame = function resetGame() {
  this.score = 10;
  this.level = 0;
  this.$grid.removeClass().addClass(this.arrayOfRounds[0]);
  this.i = 0;
  rpdg.clearingClassesAndDivs();
};

rpdg.playResetMusic = function playResetMusic() {
  this.$resultAudio.src = ('/public/assets/audio/reset.mp3');
  this.$resultAudio.play();
};

rpdg.getBonusInput = function getBonusInput() {

  event.preventDefault();
  const $bonusAnswerQueenLowerCase = this.$bonusAnswerQueen.val().toLowerCase();
  const $bonusAnswerSeasonNumber = this.$bonusAnswerSeason.val();

  if (($bonusAnswerQueenLowerCase === 'adore delano') && ($bonusAnswerSeasonNumber === '6')) {
    this.score += 10;
  }

  this.$bonusRound.removeClass('roundAppear');
  this.$complete.addClass('appear');
  this.$completeAudio.src = ('/public/assets/audio/peanut-butter.mp3');
  this.$completeAudio.play();
  this.$finalScore.html(this.score);
};

rpdg.replayGame = function replayGame() {
  rpdg.resetGame();
  this.$complete.removeClass('appear');
  this.$bonusRound.hide();
  this.$bonusRound.removeClass('roundAppear');
  this.$body.removeClass('frozen');
  this.$completeAudio.src = ('');
};

rpdg.setup = function setup() {
  this.$introAudio = $('.introButtonAudio')[0];
  this.$resultAudio = $('.resultAudio')[0];
  this.$takeTileAudio = $('.takeTileAudio')[0];
  this.$completeAudio = $('.completeAudio')[0];
  this.$takeTile = $('.takeTile');
  this.$tiles = $('.tiles');
  this.$playerScore = $('.playerScore');
  this.$result = $('.result');
  this.$gifs = $('#gifs');
  this.$reset = $('.reset');
  this.$introBtn = $('#introBtn');
  this.$grid = $('#grid');
  this.$submitBtn = $('.submitAnswer');
  this.$complete = $('.complete');
  this.$bonusRound = $('.bonusRound');
  this.$body = $('body');
  this.$afterRoundsScore = $('.afterRoundsScore');
  this.$nextRoundBtn = $('.nextRoundBtn');
  this.$playerAnswer = $('#playerAnswer');
  this.$form = $('form');

  this.$bonusAnswerQueen = $('#nameQueen');
  this.$bonusAnswerSeason = $('#numberSeason');
  this.$submitBonusAnswer = $('.submitBonusAnswer');
  this.$finalScore = $('.finalScore');
  this.$show = $('.show');
  this.$logo = $('.logo');
  this.$footer = $('footer');
  this.$main = $('main');
  this.$replay = $('.replay');


  this.$playerScore.html(this.score);
  this.$grid.addClass(this.arrayOfRounds[this.level]);
  this.$nextRoundBtn.hide();


  this.$introBtn.on('click', this.hideIntroduction.bind(this));
  this.$introBtn.on('click', this.soundClipIntro.bind(this));

  this.$takeTile.on('click', this.takeTile.bind(this));
  this.$takeTile.on('click', this.updateScore.bind(this));

  this.$form.on('submit', this.getInput.bind(this));
  this.$form.on('submit', this.clearInput.bind(this));

  this.$nextRoundBtn.on('click',this.nextRound.bind(this));

  this.$reset.on('click', this.resetGame.bind(this));
  this.$reset.on('click', this.playResetMusic.bind(this));


  this.$submitBonusAnswer.on('click', this.getBonusInput.bind(this));

  this.$replay.on('click', this.replayGame.bind(this));


};


$(rpdg.setup.bind(rpdg));
