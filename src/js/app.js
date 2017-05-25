$(() => {
  console.log('JS Loaded');

  const $introAudio = $('.introButtonAudio')[0];
  const $resultAudio = $('.resultAudio')[0];
  const $takeTileAudio = $('.takeTileAudio')[0];
  const $completeAudio = $('.completeAudio')[0];
  const $takeTile = $('.takeTile');
  const $tiles = $('.tiles');
  const $playerScore = $('.playerScore');
  const $result = $('.result');
  const $gifs = $('#gifs');
  const $reset = $('.reset');
  const $grid = $('#grid');
  const $submitBtn = $('.submitAnswer');
  const $complete = $('.complete');
  const $bonusRound = $('.bonusRound');
  const $body = $('body');
  const $afterRoundsScore = $('.afterRoundsScore');
  const $nextRoundBtn = $('.nextRoundBtn');
  const $playerAnswer = $('#playerAnswer');
  const $form = $('form');

  const $bonusAnswerQueen = $('#nameQueen');
  const $bonusAnswerSeason = $('#numberSeason');
  const $submitBonusAnswer = $('.submitBonusAnswer');
  const $finalScore = $('.finalScore');
  const $show = $('.show');
  const $logo = $('.logo');
  const $footer = $('footer');
  const $main = $('main');

  const arrayOfCorrectAnswers =
    [
      'alaska thunderfuck 5000',
      'alyssa edwards',
      'bianca del rio',
      'bob the drag queen',
      'willam belli',
      'katya zamolodchikova'
    ];

  let arrayOfTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const arrayOfRounds = [
    'roundOne',
    'roundTwo',
    'roundThree',
    'roundFour',
    'roundFive',
    'roundSix',
    'bonusRound'];

  let level = 0;
  let score = 10;
  let i = 0;

  $logo.hide();
  $footer.hide();

  $playerScore.html(score);
  $grid.addClass(arrayOfRounds[level]);
  $nextRoundBtn.hide();



  function hideIntroduction() {
    $main.show();
    $show.slideToggle('slow');
    $logo.show();
    $footer.show();
  }



  function soundClipIntro() {
    $introAudio.src = ('/public/assets/audio/intro-car.wav');
    $introAudio.play();

  }


  function takeTile() {
    const randomNum = Math.floor(Math.random() * arrayOfTiles.length);
    const randomTileIndex = arrayOfTiles.splice(randomNum, 1);
    $tiles.eq(randomTileIndex).addClass('hidden');
    $takeTileAudio.src = ('/public/assets/audio/tile-remove.mp3');
    $takeTileAudio.play();

  }

  function updateScore() {

    if (score === 0) {
      $result.html('Better luck next time, press reset to try again!');
      // $result.addClass('lose');
      $gifs.attr('src', '/public/assets/images/lose.gif');

    } else {
      score -= 1;
      $playerScore.html(Math.abs(score));
    }

  }


  function getInput() {
    event.preventDefault();

    const $stringAnswer = $playerAnswer.val();
    console.log($stringAnswer);

    const $lowerCaseStringAnswer = $stringAnswer.toLowerCase();
    console.log($lowerCaseStringAnswer);

    if ($grid.hasClass('roundSix') && ($lowerCaseStringAnswer === arrayOfCorrectAnswers[i])) {

      $bonusRound.slideToggle('slow');
      $afterRoundsScore.html(score);
      $body.addClass('frozen');
      $resultAudio.src = '/public/assets/audio/before-bonus.mp3';

    } else if ($lowerCaseStringAnswer === arrayOfCorrectAnswers[i]){
      $result.html('You clocked it! Press the Next Round button to take it to the next level!');
      level ++;
      $submitBtn.hide();
      console.log('Next level to play =', arrayOfRounds[level]);
      $gifs.attr('src', '/public/assets/images/win.gif');
      $resultAudio.src = ('/public/assets/audio/celebration.mp3');
      $resultAudio.play();
      $nextRoundBtn.show();
      $takeTile.hide();

    } else {
      $result.html('Why dontcha try another square Henny?');
      $gifs.attr('src', '/public/assets/images/try-another.gif');
      $resultAudio.src = ('/public/assets/audio/try-another.mp3');

    }

  }

  function clearInput() {
    $playerAnswer.val('');
  }

  function clearingClassesAndDivs() {
    $takeTile.show();
    $tiles.removeClass('hidden');
    $result.html('');
    $gifs.attr('src', '/public/assets/images/blank.gif');
    arrayOfTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $playerScore.html(score);
  }

  function nextRound() {
    $submitBtn.show();
    score += 10;// add ten for the next level
    i++;
    $grid.addClass(arrayOfRounds[level]);
    $nextRoundBtn.hide();//hide the next round button
    clearingClassesAndDivs();
  }

  function resetGame() {
    score = 10;
    level = 0;
    console.log($grid.removeClass().addClass(arrayOfRounds[0]));
    i = 0;
    clearingClassesAndDivs();
  }

  function playResetMusic() {
    $resultAudio.src = ('/public/assets/audio/reset.mp3');
    $resultAudio.play();
  }

  function getBonusInput() {

    event.preventDefault();
    const $bonusAnswerQueenLowerCase = $bonusAnswerQueen.val().toLowerCase();
    const $bonusAnswerSeasonNumber = $bonusAnswerSeason.val();

    if (($bonusAnswerQueenLowerCase === 'adore delano') && ($bonusAnswerSeasonNumber === '6')) {
      score += 10;
    }

    $bonusRound.removeClass('roundAppear');
    $complete.addClass('appear');
    $completeAudio.src = ('/public/assets/audio/peanut-butter.mp3');
    $completeAudio.play();
    $finalScore.html(score);
  }

  function replayGame() {
    resetGame();
    $complete.removeClass('appear');
    $bonusRound.hide();
    $bonusRound.removeClass('roundAppear');
    $body.removeClass('frozen');
    $completeAudio.src('');
  }


  $('#introBtn').on('click', hideIntroduction);
  $('#introBtn').on('click', soundClipIntro);

  $takeTile.on('click', takeTile);
  $takeTile.on('click', updateScore);

  $form.on('submit', getInput);
  $form.on('submit', clearInput);

  $nextRoundBtn.on('click', nextRound);

  $reset.on('click', resetGame);
  $reset.on('click', playResetMusic);


  $submitBonusAnswer.on('click', getBonusInput);

  $('.replay').on('click', replayGame);















});
