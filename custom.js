$(document).ready(function(){
	// 스크롤 헤더
	var $header = $('header'); //헤더를 변수에 넣기
  var $page = $('.intro-page'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top + 100;//색상 변할 부분의 top값 구하기
  
	$window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
	pageOffsetTop = $page.offset().top + 100;
});

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