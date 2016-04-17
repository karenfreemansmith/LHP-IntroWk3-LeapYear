//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

function leapYear(year) {
  if (year%4===0){
    return true;
  } else {
    return false;
  }
}

$("#findOut").click(function() {
  var yourYear=parseInt($("#testYear").val());
  var ourResult=leapYear(yourYear);
      //alert(ourResult);
  $("#results").text(ourResult);
});
