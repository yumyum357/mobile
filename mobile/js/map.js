// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(35.111602, 128.712904);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"&#40;주&#41;STX조선해양 본사"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "645 - 703 경상남도 창원시 진해구 명제로 60"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }

