var numeroSlide = 1;
var resetloop = true;
//indicadores
$("#indicator li").click(function () {
  var roleStyle = $(this).attr("role-slide");
  console.log(roleStyle);
  $("#slide ul li").css({"display":"none"});
  $("#slide ul li:nth-child("+roleStyle+")").fadeIn();
  $("#indicator li").css({"opacity":"0.5"});
  $(this).css({"opacity":"2.5"});
  resetloop = true;
  numeroSlide = roleStyle
});
//global loop
function loop() {
  if(numeroSlide >= 5){
    numeroSlide=1;
  }else {
    numeroSlide++;
  }
  $("#slide ul li").css({"display":"none"});
  $("#slide ul li:nth-child("+numeroSlide+")").fadeIn();
  $("#indicator li").css({"opacity":"0.5"});
  $("#indicator li:nth-child("+numeroSlide+")").css({"opacity":"2.5"});
}

//flechas
$("#right").click(function () {
  loop();
  resetloop = true;
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
  resetloop = true;
});
//loop slide
setInterval(function () {
  if(resetloop){
    resetloop=false;
  }
  else {
    loop();
  }

},3000)
