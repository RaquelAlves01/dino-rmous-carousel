$('.img-cards').on('click', function () {
  console.log('I was changed!')

  $(this).removeClass('current');

  if( $(this).is(':last-child') ) {
    $('.img-cards:first-child').addClass('current')
  } else {
    $(this).next().addClass('current');
  }

});
