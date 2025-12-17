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
      // Toggle header state
      this.classList.toggle("active");

      // Find the content block after the header
      var content = this.nextElementSibling;

      // If visible, hide and remove animation
      if (content.style.display === "block") {
        let anim = content.querySelector(".timeline-animate");
        if (anim) anim.classList.remove("active");
        content.style.display = "none";
      } else {
        // If hidden, show and start animation
        content.style.display = "block";

        // Small delay so CSS transitions can pick up the class change
        setTimeout(function() {
          let anim = content.querySelector(".timeline-animate");
          if (anim) anim.classList.add("active");
        }, 10);
      }
    });
  }
});
