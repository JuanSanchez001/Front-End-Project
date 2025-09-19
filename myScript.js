$(document).ready(function() {
$("#image1").click(function(){
    $("#ulp1").toggle();
  });
  
  $("#image2").click(function(){
    $("#ulp2").toggle();
  });
});
 
document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});


