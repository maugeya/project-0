$(() => {
  console.log('JS Loaded');

  const $takeTile = $('.takeTile');
  const $tiles = $('.tiles');

  let score = 10;

  console.log($tiles);

  $takeTile.on('click', () => {

    $tiles.hide('slow', 'swing', () => {
      
    });
  });




















});
