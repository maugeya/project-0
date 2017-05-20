$(() => {
  console.log('JS Loaded');

  const $takeTile = $('.takeTile');
  const $tiles = $('.tiles');
  const $unhidden = $('.unhidden');

  let score = 10;

  console.log($tiles);

  $takeTile.on('click', () => {

    const $randomNum = Math.floor(Math.random() * 9);

    const $arrayOfTiles = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

    let $randomTileSelected = $arrayOfTiles.splice([$randomNum], 1);
    console.log($randomTileSelected);

    // const $usedTiles = [];
    // $usedTiles.push($randomTileSelected);
    // console.log($usedTiles);


       $tiles.eq($randomTileSelected).hide('slow', 'swing');

    //  });
  //   $randomTile.hide('slow', 'swing', () => {
  //
  //
  //
  });





















});
