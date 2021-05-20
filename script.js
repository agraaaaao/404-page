$(document).ready(function() {
  var move=0;

  $("#arrow").click(function(e) {
    e.preventDefault();
    $(this).removeClass("move_"+move);
    move++;
    if(move > 10) {
      $(".arrows").css("visibility","hidden")
      $(".error-message").css("visibility","visible");
    }
    else
      $(this).addClass("move_"+move);
  });
});