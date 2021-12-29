$(document).ready(function(){
	// 스크롤 헤더
	var $header = $('header'); //헤더를 변수에 넣기
  var $page = $('.intro-page'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top + 100;//색상 변할 부분의 top값 구하기
  
	$window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
	pageOffsetTop = $page.offset().top + 100;
  
});
// nav bar animation
let horizontalUnderLine = document.getElementById('horizontal-underline');
let horizontalMenus = document.querySelectorAll('nav a');

horizontalMenus.forEach((menu) => 
  menu.addEventListener('click', (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + 'px';
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + 'px';
  horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px';
};


// HAMBURGER
$('#line-wrapper').click(function(){
  /* 추가된 부분 */
  $('.line').removeClass('init');
  $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
  $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
  $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
  $('.menu-slide').toggleClass('active');
})

  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('active', scrolled); //클래스 토글
  });
});

$('.btn').hover(function(){
  $(this).children('.btnBack').addClass('goUp');
  $(this).children('.btnBack').removeClass('goDown');
},function(){
  $(this).children('.btnBack').removeClass('goUp');
  $(this).children('.btnBack').addClass('goDown');
});

// LOGO SLIDE
$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 700,
  pauseOnHover: true,
  draggable: true
});