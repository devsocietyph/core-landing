
    $("input").keyup(function () {
    var value = $(this).val();
    $(this).val(value.toLowerCase());
    $("input").bind("keypress", function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code === 13) {
          
      if(["flight", "fire", "burn", 3].indexOf(value) > -1) {
      $("p").text("You entered a magic word.");
      }
          
      if(value === "start") {
      $("p").text("The star's hydrogen hiccups blot your vision--");
      $("<p><br /><em>(noun)</em><br />the time in the evening when the sun disappears or daylight fades.</p>").hide().delay(2000).appendTo("p").fadeIn(1000);
      }
          
    }
  });
});


function wala(){
    
}