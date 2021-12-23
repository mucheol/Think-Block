$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: $('.next'),
  prevArrow: $('.prev')
});

$('.btn').hover(function(){
  $(this).children('.btnBack').addClass('goUp');
  $(this).children('.btnBack').removeClass('goDown');
},function(){
  $(this).children('.btnBack').removeClass('goUp');
  $(this).children('.btnBack').addClass('goDown');
});