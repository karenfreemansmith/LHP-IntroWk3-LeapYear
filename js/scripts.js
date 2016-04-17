//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
//business logic
function leapYear(year) {
  if ((year%4===0) && ((year%100!==0) || (year%400===0))){
    return true;
  } else {
    return false;
  }
}
//user interface logic
$("#findOut").click(function() {
  var yourYear=parseInt($("#testYear").val());
  var ourResult=leapYear(yourYear);
      //alert(ourResult);

  $(".year").text(yourYear);

  if(!ourResult) {
    $(".not").text("not");
  } else {
    $(".not").text("");
  }

  $("#results").show();
});
