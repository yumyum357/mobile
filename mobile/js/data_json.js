var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    
    newContent += '<div class="jsonT"><span>NO.</span><span>채용정보</span><span>제목</span></div>';
    newContent += '<ul class="jsonCon">';

    for (var i = 0; i < responseObject.info.length; i++) { 
//      
        newContent += '<li class="list hide" ><a class="trigger" href="javascrip:void(0)">';
        newContent += '<span class="num">' + responseObject.info[i].num + '</span>';
        newContent += '<span class="discretion">' + responseObject.info[i].discretion + '</span>';
        newContent += '<span class="title">' + responseObject.info[i].title + '</span></a>';
        newContent += '<p class="content">' + responseObject.info[i].content + '</p>';
        newContent += '</li>';
         
    }
    newContent += '</ul>';
 
    document.getElementById('jsonCon').innerHTML = newContent;
    
    
    
       // 채용정보
    var article = $('.jsonCon .list'); //모든 li 

    //article.find('.a').slideUp(100); //모든 답변을 닫아라
    $('.trigger').click(function (e) { //각각의 질문을 클릭하면 
        e.preventDefault();

        var myArticle = $(this).parents('.list'); // 클릭한 해당 선조 리스트//클릭된 li


        if (myArticle.hasClass('hide')) { //.is('.hide')와 같음 하이드라는 클래스를 가지고있냐?라고 묻는 //클릭한 해당 리스트에 답변이 닫혀있냐?
            article.find('.content').slideUp(100); //모든리스트의 답변을 닫아라s
            
            article.removeClass('show').addClass('hide'); //모든리스트에show되어있는 것을 hide로 바꿔라
            
            myArticle.removeClass('hide').addClass('show'); //클릭한 리스트의 클래스를 show로 변경하세요
            myArticle.find('.content').slideDown(100);
        } else { //클릭한 해당 리스트에 답변이 열려있냐?
            myArticle.removeClass('show').addClass('hide');
            
            myArticle.find('.content').slideUp(100);
            
        }

    });
    
    
    
    

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다
