$(function(){

    let nowIdx = 0;
    
    // nav
   $('header > .mnunav > nav > .gnb > li').on('mouseover',function(){
       $(this).children('.lnb').stop().slideDown(200);
   });
   $('header > .mnunav > nav > .gnb > li').on('mouseout',function(){
       $(this).children('.lnb').stop().slideUp(200);
   });

   //메인슬라이드
   setInterval(() => {
       const $container = $('.slide > .slide-container');
       const $slides = $('.slide > .slide-container > li');
       

       $container.animate({left:-310},function(){
           $slides.eq(0).appendTo($container)
           $container.css({left:0});
       })
       
   }, 3000);

   //시간
   let str = '';
   const today = new Date();
        //년도
        const year = today.getFullYear();
        str += year + '년';

        //월
        const month = today.getMonth() + 1;
        str += month + '월'
        //일

        const date = today.getDate();
        str += date + '일'

        //시간
        const hour = today.getHours();
        str += hour + '시'

        //분 
        const minutes = today.getMinutes();
        str += minutes + '분'

        //초

        const seconds = today.getSeconds();
        str += seconds + '초'
        document.querySelector('.time').textContent = str;


        document.querySelector('.time').textContent = today.toLocaleString();




   //독도뉴스 텝메뉴

   const $tabmnu = $('.cont3 > .news > .tap-pagination > li > a');
   const $tabcont = $('.cont3 > .news > .box');

   $tabmnu.on('click',function(evt){
       evt.preventDefault();
       nowIdx = $tabmnu.index(this);
       //활성화표시
       $(this).parent().addClass('on').siblings().removeClass('on');
       //컨테이너이동
       $tabcont.css({left:-1400*nowIdx});
   });

  // 독도매거진 라이트박스
  const $btnlight = $('.cont4 > .bg_main > .megazine > .btn1'); 
  const $light = $('section > .rightbox');
  const $close = $('section > .rightbox > .close');
  const $megazine = $('.cont4 > .bg_main > .megazine > .frame > a');
  

  $btnlight.on('click',function(evt){
    evt.preventDefault();
    $light.fadeIn(1000);
  });

  $close.on('click',function(){
    $light.fadeOut(1000);
  });
  $megazine.on('click',function(evt){
    evt.preventDefault();
    $light.fadeIn(1000);

  });


 
  


















   //D스토리

    const $fadeslide = $('.cont4 > .bg_main > .dstory > .dstory-container > li');
    const $btnPrev = $('.cont4 > .bg_main > .dstory > nav > .prev');
    const $btnNext = $('.cont4 > .bg_main > .dstory > nav > .next');
    const fadeFn = function(){
        //1. 이전슬라이드가 사라지는 작업
        $fadeslide.filter('.on').stop().fadeOut(1000).removeClass('on');
    
        //2. 이번에 나타날 슬라이드 작업
        $fadeslide.eq(nowIdx).stop().fadeIn(1000).addClass('on');
        //3. 텍스트
        const counter = $('.cont4 > .bg_main > .dstory > nav > span > strong');
        counter.text(nowIdx+1);
      };

    //이전버튼
    $btnPrev.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=4;
    }

    fadeFn();
  });

  //다음버튼
  $btnNext.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx<4){
      nowIdx++;
    }else{
      nowIdx=0;
    }

    fadeFn();
  });

  //자동재생 함수
  const autoplay = function(){
    intervalKey = setInterval(function(){
      //방법1) 이벤트 강제 발생 trigger
      $btnNext.trigger('click');

      
    },2000);
  };
  $(window).on('load',function(){
    autoplay();
  });

   //독도자료실 텝메뉴

   const $tabmnu1 = $('.cont4 > .bg_main > .archives > .archives-pagination > li > a');
   const $tabcont1 = $('.cont4 > .bg_main > .archives > .flex-container');

   $tabmnu1.on('click',function(evt){
       evt.preventDefault();
       nowIdx = $tabmnu1.index(this);
       //활성화표시
       $(this).parent().addClass('on').siblings().removeClass('on');
       //컨테이너이동
       $tabcont1.css({left:-560*nowIdx});
   });

   //배너 슬라이드
   setInterval(() => {
    const $bannercontainer = $('.cont5 > .banner > .banner-slide');
    const $bannerslides = $('.cont5 > .banner > .banner-slide > li');
    

    $bannercontainer.animate({left:-280},function(){
        $bannerslides.eq(0).appendTo($bannercontainer)
        $bannercontainer.css({left:0});
    })
    
  }, 3000);
   
   

   

 
   

    
});
