$(document).ready(function() {
	$("#image1").click(function(){
    $("#ulp1").toggle();
  });
  	$("#image2").click(function(){
    $("#ulp2").toggle();
  });
});
 
$(document).ready(function(){
  $("collapsible").click(function(){
    $("p").toggle();
  });
});
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "block";
  let anim = content.querySelector('.timeline-animate');
  if(anim) anim.classList.remove('active');
	content.style.display = "none";
  } else {
    	content.style.display = "block";
		setTimeout(function(){
        let anim = content.querySelector('.timeline-animate');
        if(anim) anim.classList.add('active');
        }, 10);
		 }
	  });
  	}
});


