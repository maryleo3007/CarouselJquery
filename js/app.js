var numeroSlide = 1;
//indicadores
$("#indicator li").click(function () {
  var roleStyle = $(this).attr("role-slide");
  console.log(roleStyle);
  $("#slide ul li").css({"display":"none"});
  $("#slide ul li:nth-child("+roleStyle+")").fadeIn();
  $("#indicator li").css({"opacity":"0.5"});
  $(this).css({"opacity":"2.5"});
});
//flechas
$("#right").click(function () {
  if(numeroSlide >= 5){
    numeroSlide=1;
  }else {
    numeroSlide++;
  }
  $("#slide ul li").css({"display":"none"});
  $("#slide ul li:nth-child("+numeroSlide+")").fadeIn();
  $("#indicator li").css({"opacity":"0.5"});
  $("#indicator li:nth-child("+numeroSlide+")").css({"opacity":"2.5"});
});

$("#left").click(function () {
  if(numeroSlide <= 1){
    numeroSlide=5;
  }else {
    numeroSlide--;
  }
  $("#slide ul li").css({"display":"none"});
  $("#slide ul li:nth-child("+numeroSlide+")").fadeIn();
  $("#indicator li").css({"opacity":"0.5"});
  $("#indicator li:nth-child("+numeroSlide+")").css({"opacity":"2.5"});
});
