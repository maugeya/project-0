$(() => {
  console.log('JS Loaded');


  $('.logo').hide();

  $('footer').hide();


  const $introAudio = $('.introButtonAudio')[0];
  const $resultAudio = $('.resultAudio')[0];
  const $takeTileAudio = $('.takeTileAudio')[0];
  const $completeAudio = $('.completeAudio')[0];


  function hideIntroduction() {
    $('.show').slideToggle('slow');
    $('.logo').show();
    $('footer').show();
  }



  function soundClipIntro() {
    $introAudio.src = ('../../public/assets/audio/intro-car.wav');
    $introAudio.play();

  }

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



  let arrayOfTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  let arrayOfRounds = [
    'roundOne',
    'roundTwo',
    'roundThree',
    'roundFour',
    'roundFive',
    'roundSix',
    'bonusRound'];

  let level = 0;

  let score = 10;
  $playerScore.html(score);


  const setLevel = $grid.addClass(arrayOfRounds[level]);

  const $nextRound = $('.nextRound');

  let i = 0;

  $nextRound.hide();

  //logic to take away a random tile when button pressed


  function takeTile() {
    const randomNum = Math.floor(Math.random() * arrayOfTiles.length);
    const randomTileIndex = arrayOfTiles.splice(randomNum, 1);
    $tiles.eq(randomTileIndex).addClass('hidden');
    $takeTileAudio.src = ('../../public/assets/audio/tile-remove.mp3');
    $takeTileAudio.play();


  }


  function updateScore() {

    if (score === 0) {
      $result.html('Better luck next time, press reset to try again!');
      // $result.addClass('lose');
      $gifs.attr('src', '../../public/assets/images/lose.gif');

    } else {
      score -= 1;
      $playerScore.html(Math.abs(score));
    }

  }




  //setting const for checking form on submission

  const $playerAnswer = $('#playerAnswer');

  const arrayOfCorrectAnswers =
    [
      'alaska thunderfuck 5000',
      'alyssa edwards',
      'bianca del rio',
      'bob the drag queen',
      'willam belli',
      'katya zamolodchikova'
    ];


  const $form = $('form');


//setting up the form to not refresh page on submit
//getting answers from player submitting
//clearing form after submitting



  function getInput() {
    event.preventDefault();

    const $stringAnswer = $playerAnswer.val();
    console.log($stringAnswer);

    const $lowerCaseStringAnswer = $stringAnswer.toLowerCase();
    console.log($lowerCaseStringAnswer);


    function checkAnswer() {

      if ($grid.hasClass('roundSix') && ($lowerCaseStringAnswer === arrayOfCorrectAnswers[i])) {

        $bonusRound.slideToggle('slow');
        $afterRoundsScore.html(score);
        $body.addClass('frozen');
        $resultAudio.src = ('../../public/assets/audio/before-bonus.mp3');




      } else if ($lowerCaseStringAnswer === arrayOfCorrectAnswers[i]){
        $result.html('You clocked it! Press the Next Round button to take it to the next level!');
        level ++;
        $submitBtn.hide();
        console.log('Next level to play =', arrayOfRounds[level]);
        $gifs.attr('src', '../../public/assets/images/win.gif');
        $resultAudio.src = ('../../public/assets/audio/celebration.mp3');
        $resultAudio.play();
        $nextRound.show();
        $takeTile.hide();


      } else {
        $result.html('Why dontcha try another square Henny?');
        $gifs.attr('src', '../../public/assets/images/try-another.gif');
        $resultAudio.src = ('../../public/assets/audio/try-another.mp3')

      }

    }
    checkAnswer();




  }


  function clearInput() {
    $playerAnswer.val('');

  }

  function clearingClassesAndDivs() {
    $takeTile.show();
    $tiles.removeClass('hidden');
    $result.html('');
    $gifs.attr('src', '../../public/assets/images/blank.gif');
    arrayOfTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $playerScore.html(score);
  }

  function nextRound() {
    $submitBtn.show();
    score += 10;// add ten for the next level
    i++;
    $grid.addClass(arrayOfRounds[level]);
    $nextRound.hide();//hide the next round button
    clearingClassesAndDivs();

  }

  function resetGame() {
    score = 10;
    level = 0;
    $grid.removeClass().addClass(arrayOfRounds[0]);
    i = 0;
    clearingClassesAndDivs();
  }



  function playResetMusic() {
    $resultAudio.src = ('../../public/assets/audio/reset.mp3');
    $resultAudio.play();
  }



  const $bonusAnswerQueen = $('#nameQueen');
  const $bonusAnswerSeason = $('#numberSeason');
  const $submitBonusAnswer = $('.submitBonusAnswer');
  const $finalScore = $('.finalScore');


  function getBonusInput() {

    event.preventDefault();
    const $bonusAnswerQueenLowerCase = $bonusAnswerQueen.val().toLowerCase();
    const $bonusAnswerSeasonNumber = $bonusAnswerSeason.val();


    function setCompleteStage() {
      $bonusRound.removeClass('roundAppear');
      $complete.addClass('appear');
      $completeAudio.src = ('../../public/assets/audio/peanut-butter.mp3');
      $completeAudio.play();
      $finalScore.html(score);
    }

    function checkBonusAnswers() {
      if (($bonusAnswerQueenLowerCase === 'adore delano') && ($bonusAnswerSeasonNumber === '6')) {
        score += 10;
        setCompleteStage();
      } else {
        setCompleteStage();
      }

    }
    checkBonusAnswers();
  }

  function replayGame() {
    resetGame();
    $complete.removeClass('appear');
    $bonusRound.hide();
    $bonusRound.removeClass('roundAppear');
    $body.removeClass('frozen');
  }


  //set things in bonus round screen to position absolute to change shit
  // $(window).load()


  $('#introBtn').on('click', hideIntroduction);
  $('#introBtn').on('click', soundClipIntro);

  $takeTile.on('click', takeTile);
  $takeTile.on('click', updateScore);

  $form.on('submit', getInput);
  $form.on('submit', clearInput);

  $('.nextRound').on('click', nextRound);

  $reset.on('click', resetGame);
  $reset.on('click', playResetMusic);


  $submitBonusAnswer.on('click', getBonusInput);

  $('.replay').on('click', replayGame);















});
