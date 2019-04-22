 $(document).ready(function () {


     $(".navIcon").click(function () { //메뉴버튼 클릭시
         $('#gnb .nDepth ul').hide();
         $('#gnb .nDepth h3>a').removeClass('on').addClass('off');

         var documentHeight = $(document).height();
         //실제 페이지의 높이(를계산해줌) = $(document).height();
         $(".darkbox").css('height', documentHeight);
         $("#gnb").css('height', documentHeight);
         //반투명박스와 네비의 높이를 실제 페이지의 높이로 바꾸어라***   

         $("#gnb").animate({
             right: 0,
             opacity: 1
         }, 300);
         $(".darkbox").show();
     });

     $(".darkbox,.close").click(function () { //닫기버튼 클릭시
         $("#gnb").animate({
             right: '-100%',
             opacity: 0
         }, 'fast');
         $(".darkbox").hide();
     });

     //2depth 메뉴 교대로 열기 처리 
     $('#gnb .nDepth h3>a').click(function () {

         if ($(this).hasClass('on')) {
             $(this).removeClass('on').addClass('off').parents('.nDepth').find('ul').slideUp('fast');
         } else {
             $('#gnb .nDepth ul').hide();
             $('#gnb .nDepth h3>a').removeClass('on').addClass('off');

             $(this).addClass('on').parents('.nDepth').find('ul').slideDown('slow');
         }


     });



     /*  $('#gnb .depth1 h3>a').click(function(){
           var name = $(this).offset();
           name += ':after';

           
           $('#gnb .depth1 h3>a:after').css('background','images/navArrow_640.png');
           name.css('background','images/navArrowOn_640.png');
       }); */

});