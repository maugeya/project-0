$(() => {
  console.log('JS Loaded');

  const $takeTile = $('.takeTile');
  const $tiles = $('.tiles');
  const $unhidden = $('.unhidden');
  const $playerScore = $('.playerScore');

  let score = 10;

  const $settingPlayerScore = $playerScore.html(score);

  console.log($tiles);

  $takeTile.on('click', () => {

    const $randomNum = Math.floor(Math.random() * 9);

    const $arrayOfTiles = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

    const $randomTileSelected = $arrayOfTiles.splice([$randomNum], 1);
    console.log($randomTileSelected);

    // const $usedTiles = [];
    // $usedTiles.push($randomTileSelected);
    // console.log($usedTiles);
    const changeClass = $tiles.eq($randomTileSelected).removeClass('unhidden').addClass('hidden');


    const checkingClasses = function checkingClasses() {
      if ((changeClass.hasClass('hidden')) === true) {
        return $randomTileSelected;
      } else {
        return changeClass;
      }
    };



    // });

  });

  //Function to return the player input
  const $playerAnswer = $('#playerAnswer');
  $('form').on('submit', function(event) {
    event.preventDefault();
      console.log($playerAnswer.val());

    const $stringAnswer = $playerAnswer.val();
    $('#playerInputForm').children('input').val('');
    return $stringAnswer;

  });




















});
